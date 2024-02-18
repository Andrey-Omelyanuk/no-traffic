from django.conf import settings
from rest_framework.viewsets import ViewSet, ModelViewSet, ReadOnlyModelViewSet
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response


class CoreModelViewSet(ModelViewSet):
    """ Base model view set for project """
    @action(detail=False)
    def count(self, request):
        count = self.filter_queryset(self.get_queryset()).count()
        return Response(count)


class CoreReadOnlyModelViewSet(ReadOnlyModelViewSet):
    """ Base read only model view set for project """
    @action(detail=False)
    def count(self, request):
        count = self.filter_queryset(self.get_queryset()).count()
        return Response(count)


class SettingsViewSet(ViewSet):
    permission_classes = [AllowAny]
    def list(self, request, format=None):
        _settings = {}
        _settings['DEBUG'] = settings.DEBUG
        return Response(_settings)
