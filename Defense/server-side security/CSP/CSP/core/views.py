import json

from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import viewsets
from .models import MyModel, Result, Issue, Files
from .serializer import FilesSerializer


def load_data_from_json(json_file_path, file_id):
    with open(json_file_path) as file:
        data = json.load(file)
        results_data = data["results"]
        
        my_model = MyModel.objects.create(file_id=file_id)
        
        for result_data in results_data:
            result = Result.objects.create()
            
            for issue_data in result_data["issues"]:
                issue = Issue.objects.create(
                    code=issue_data["code"],
                    col_offset=issue_data["col_offset"],
                    end_col_offset=issue_data["end_col_offset"],
                    filename=issue_data["filename"],
                    issue_confidence=issue_data["issue_confidence"],
                    issue_cwe_id=issue_data["issue_cwe"]["id"],
                    issue_cwe_link=issue_data["issue_cwe"]["link"],
                    issue_severity=issue_data["issue_severity"],
                    issue_text=issue_data["issue_text"],
                    line_number=issue_data["line_number"],
                    line_range=issue_data["line_range"],
                    more_info=issue_data["more_info"],
                    test_id=issue_data["test_id"],
                    test_name=issue_data["test_name"]
                )
                
                result.issues.add(issue)
                
            my_model.results = result

        my_model.save()

class FilesViewSet(viewsets.ModelViewSet):
    queryset = Files.objects.all()
    serializer_class = FilesSerializer