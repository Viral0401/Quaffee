from langchain import OpenAI
from langchain.agents import create_pandas_dataframe_agent
import pandas as pd

import environ

env = environ.Env()
environ.Env.read_env()

API_KEY = env("apikey")

def create_agent(filename: str):
    # Create an OpenAI object.
    llm = OpenAI(openai_api_key=API_KEY)

    # Read the CSV file into a Pandas DataFrame.
    df = pd.read_csv("Sales.csv")

    # Create a Pandas DataFrame agent.
    return create_pandas_dataframe_agent(llm, df, verbose=False)
