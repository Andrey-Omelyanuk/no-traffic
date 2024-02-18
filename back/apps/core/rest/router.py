from .views import SettingsViewSet


def core(router):
    router.register(r'settings' , SettingsViewSet   , basename="settings")
