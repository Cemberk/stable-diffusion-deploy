import json

from locust import HttpUser, task


class DreamUser(HttpUser):
    @task
    def predict(self):
        data = {"dream": "Cats in hats", "high_quality": False}
        URL = f"{self.host}/api/predict"
        print(self.host, URL)
        data = json.dumps(data)
        response = self.client.post(URL, data=data)
        response.raise_for_status()