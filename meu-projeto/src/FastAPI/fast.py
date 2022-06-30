#Código não funcional por enquanto, somente vendo algumas aulas de fast api...
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"Hello":"World!"}