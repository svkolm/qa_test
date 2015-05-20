from django.db import models
# Create your models here.

from mongoengine import Document, EmbeddedDocument, StringField, ReferenceField, IntField, ListField, BooleanField, EmbeddedDocumentField, EmailField, DateTimeField, ObjectIdField, DictField, DENY
import django.dispatch

class ToDo(Document):
    caption = StringField()
    date_time = DateTimeField()
    tags = ListField(StringField())

    @classmethod
    def get_todos_by_tag(cls, tag):
        return ToDo.objects(tags=tag)
