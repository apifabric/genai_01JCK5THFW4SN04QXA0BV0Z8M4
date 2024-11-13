# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 13, 2024 16:31:38
# Database: sqlite:////tmp/tmp.Q05Iy7L7m3-01JCK5THFW4SN04QXA0BV0Z8M4/SystemResourceMonitor/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class CpuLog(SAFRSBaseX, Base):
    """
    description: Table to store CPU usage logs
    """
    __tablename__ = 'cpu_log'
    _s_collection_name = 'CpuLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    timestamp = Column(DateTime, nullable=False)
    usage_percent = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    FileLogList : Mapped[List["FileLog"]] = relationship(back_populates="cpu_log")



class User(SAFRSBaseX, Base):
    """
    description: Table to store user information
    """
    __tablename__ = 'user'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    created_at = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    FileUploadList : Mapped[List["FileUpload"]] = relationship(back_populates="user")



class FileUpload(SAFRSBaseX, Base):
    """
    description: Table to store file uploads
    """
    __tablename__ = 'file_upload'
    _s_collection_name = 'FileUpload'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'))
    filename = Column(String, nullable=False)
    uploaded_at = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("FileUploadList"))

    # child relationships (access children)
    FileLogList : Mapped[List["FileLog"]] = relationship(back_populates="file_upload")



class FileLog(SAFRSBaseX, Base):
    """
    description: Table to correlate files with CPU logs
    """
    __tablename__ = 'file_log'
    _s_collection_name = 'FileLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    file_upload_id = Column(ForeignKey('file_upload.id'))
    cpu_log_id = Column(ForeignKey('cpu_log.id'))

    # parent relationships (access parent)
    cpu_log : Mapped["CpuLog"] = relationship(back_populates=("FileLogList"))
    file_upload : Mapped["FileUpload"] = relationship(back_populates=("FileLogList"))

    # child relationships (access children)
