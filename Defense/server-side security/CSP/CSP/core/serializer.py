from rest_framework import serializers
from .models import MyModel, Result, Issue, Files


class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = '__all__'


class ResultSerializer(serializers.ModelSerializer):
    issues = IssueSerializer(many=True)

    class Meta:
        model = Result
        fields = ['issues']


class MyModelSerializer(serializers.ModelSerializer):
    results = ResultSerializer()

    class Meta:
        model = MyModel
        fields = ['results']


class FilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Files
        fields = ['id','file']