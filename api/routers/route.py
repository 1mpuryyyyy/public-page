from fastapi import APIRouter, Request, status, Body
from fastapi.responses import JSONResponse
from uuid import uuid4

router = APIRouter()


@router.get("/summary/", status_code=status.HTTP_200_OK)
async def get_summary(request: Request, _id: str = ""):
    """get summary by _id"""
    summary = await request.app.mongodb['summary-collection'].find_one(
        {"_id": _id})
    if not summary:
        return JSONResponse(status_code=status.HTTP_404_NOT_FOUND,
                            content={"error": "Not found"})
    return summary


@router.post("/summary/", status_code=status.HTTP_201_CREATED)
async def create_summary(request: Request, data=Body()):
    """create summary"""
    data['_id'] = str(uuid4())
    await request.app.mongodb['summary-collection'].insert_one(dict(data))
    return data
