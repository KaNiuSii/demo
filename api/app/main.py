from fastapi import FastAPI
from pydantic import BaseModel
from app.baazar import BazaarRiddle
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Response(BaseModel):
    shops: str
    shopping_list: str
    answer: int


@app.get("/part1/", response_model=Response)
def read_part1():
    baazar = BazaarRiddle()
    shops, shopping_list = baazar.create_an_input(100)
    answer = baazar.part1()
    return Response(shops=shops, shopping_list=shopping_list, answer=answer)

@app.get("/part2/", response_model=Response)
def read_part2():
    baazar = BazaarRiddle()
    shops, shopping_list = baazar.create_an_input(100)
    answer = baazar.part2()
    return Response(shops=shops, shopping_list=shopping_list, answer=answer)
