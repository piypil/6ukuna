from django.db import models


class Issue(models.Model):
    code = models.TextField()
    col_offset = models.IntegerField()
    end_col_offset = models.IntegerField()
    filename = models.CharField(max_length=255)
    issue_confidence = models.CharField(max_length=255)
    issue_cwe_id = models.IntegerField()
    issue_cwe_link = models.URLField()
    issue_severity = models.CharField(max_length=255)
    issue_text = models.TextField()
    line_number = models.IntegerField()
    line_range = models.JSONField()
    more_info = models.URLField()
    test_id = models.CharField(max_length=255)
    test_name = models.CharField(max_length=255)


class Result(models.Model):
    issues = models.ManyToManyField(Issue)


class MyModel(models.Model):
    file_id = models.CharField(max_length=255, unique=True)
    results = models.OneToOneField(Result, on_delete=models.CASCADE)


class Files(models.Model):
    file = models.FileField(upload_to='store/pdfs/')

    def __str__(self):
        return self.file