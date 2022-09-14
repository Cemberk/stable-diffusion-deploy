import json
import os
from typing import Any, Optional

from lightning_app.storage.drive import Drive


def load_secret_from_env_or_drive(name: str, drive: Drive) -> Optional[str]:
    def get_secret_from_drive():
        try:
            drive.get(name)
            with open(name) as f:
                return f.read()
        except BaseException as e:
            print(e)
            return None

    return os.environ.get(name) or get_secret_from_drive()


def save_secret_to_drive(name: str, value: str, drive: Drive) -> None:
    with open(name, "w") as f:
        f.write(value)
    return drive.put(name)


def get_item(name: str, drive: Drive) -> Optional[Any]:
    try:
        drive.get(name)
        with open(name) as f:
            return json.loads(f.read())
    except BaseException as e:
        print(e)
        return None


def save_item(name: str, value: Any, drive: Drive) -> None:
    with open(name, "w") as f:
        f.write(json.dumps(value))
    return drive.put(name)