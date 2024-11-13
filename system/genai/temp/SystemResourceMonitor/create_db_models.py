# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class User(Base):
    """description: Table to store user information"""
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    created_at = Column(DateTime, default=datetime.now())


class FileUpload(Base):
    """description: Table to store file uploads"""
    __tablename__ = 'file_upload'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    filename = Column(String, nullable=False)
    uploaded_at = Column(DateTime, default=datetime.now())


class CpuLog(Base):
    """description: Table to store CPU usage logs"""
    __tablename__ = 'cpu_log'

    id = Column(Integer, primary_key=True, autoincrement=True)
    timestamp = Column(DateTime, nullable=False)
    usage_percent = Column(Integer, nullable=False)


class FileLog(Base):
    """description: Table to correlate files with CPU logs"""
    __tablename__ = 'file_log'

    id = Column(Integer, primary_key=True, autoincrement=True)
    file_upload_id = Column(Integer, ForeignKey('file_upload.id'))
    cpu_log_id = Column(Integer, ForeignKey('cpu_log.id'))


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from datetime import datetime, date

# Users
user1 = User(username='user01', email='user01@example.com', created_at=datetime(2023, 1, 1))
user2 = User(username='user02', email='user02@example.com', created_at=datetime(2023, 2, 1))
user3 = User(username='user03', email='user03@example.com', created_at=datetime(2023, 3, 1))
user4 = User(username='user04', email='user04@example.com', created_at=datetime(2023, 4, 1))

# File Uploads
file_upload1 = FileUpload(user_id=1, filename='report1.pdf', uploaded_at=datetime(2023, 5, 1))
file_upload2 = FileUpload(user_id=2, filename='report2.pdf', uploaded_at=datetime(2023, 5, 2))
file_upload3 = FileUpload(user_id=3, filename='report3.pdf', uploaded_at=datetime(2023, 5, 3))
file_upload4 = FileUpload(user_id=4, filename='report4.pdf', uploaded_at=datetime(2023, 5, 4))

# CPU Logs
cpu_log1 = CpuLog(timestamp=datetime(2023, 5, 1, 12, 0, 0), usage_percent=70)
cpu_log2 = CpuLog(timestamp=datetime(2023, 5, 2, 12, 0, 0), usage_percent=80)
cpu_log3 = CpuLog(timestamp=datetime(2023, 5, 3, 12, 0, 0), usage_percent=60)
cpu_log4 = CpuLog(timestamp=datetime(2023, 5, 4, 12, 0, 0), usage_percent=90)

# File Logs
file_log1 = FileLog(file_upload_id=1, cpu_log_id=1)
file_log2 = FileLog(file_upload_id=2, cpu_log_id=2)
file_log3 = FileLog(file_upload_id=3, cpu_log_id=3)
file_log4 = FileLog(file_upload_id=4, cpu_log_id=4)


session.add_all([user1, user2, user3, user4, file_upload1, file_upload2, file_upload3, file_upload4, cpu_log1, cpu_log2, cpu_log3, cpu_log4, file_log1, file_log2, file_log3, file_log4])
session.commit()
