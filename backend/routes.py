# Routes  
from models import Question
from fastapi import APIRouter

router = APIRouter()

@router.post("/questions")
def create_questions(question: Question):
    pass

