from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from typing import Optional
from dotenv import load_dotenv
import openai
from fastapi import Query

load_dotenv()

app = FastAPI()

# CORS configuration
origins = ["*"]  # Allow all origins during development; restrict in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# OpenAI API Key
openai.api_key = os.getenv("OPENAI_API_KEY")
if not openai.api_key:
    raise ValueError("OPENAI_API_KEY not found in environment variables")


class SummaryRequest(BaseModel):
    tool_name: str
    max_tokens: Optional[int] = 200


def search_documentation(tool_name: str) -> str:
    """
    Dummy function to simulate searching documentation.
    Replace this with actual documentation retrieval logic.
    """
    # In a real application, you would use a search engine or
    # documentation index to find relevant documentation.
    # For now, return a placeholder.
    return f"No docs"


def summarize_documentation(documentation: str, tool_name: str, max_tokens: int = 200) -> str:
    """
    Summarizes the given documentation using OpenAI's GPT.
    """
    # return f"LET'S ASSUME U SEE SUMMARY. API: {os.getenv("OPENAI_API_KEY")}"
    try:
        prompt = f"Summarize the documentation for {tool_name} in a concise manner"
        response = openai.Completion.create(
            engine="text-davinci-003",  # Or another suitable engine
            prompt=prompt,
            max_tokens=max_tokens,
            n=1,
            stop=None,
            temperature=0.5,
        )
        return response.choices[0].text.strip()
    except Exception as e:
        print(f"Error during summarization: {e}")
        # raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))


@app.get("/summarize")
async def summarize_tool(tool_name: str = Query(..., title="Tool Name")):
    """
    Endpoint to summarize documentation for a given tool.
    """
    documentation = search_documentation(tool_name)
    summary = summarize_documentation(documentation, tool_name)
    return {"summary": summary}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host=["::", "0.0.0.0"], port=8000)