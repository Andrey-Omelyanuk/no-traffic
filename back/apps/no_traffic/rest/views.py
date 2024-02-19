from apps.core.rest.views import CoreReadOnlyModelViewSet, CoreModelViewSet
from ..models import City, Street, Intersection, StreetInIntersection
from .serializers import CitySerializer, StreetSerializer, IntersectionSerializer, StreetInIntersectionSerializer


class CityViewSet(CoreReadOnlyModelViewSet):
    queryset         = City.objects.all()
    serializer_class = CitySerializer

    def get_queryset(self):
        return City.objects.all()


class StreetViewSet(CoreReadOnlyModelViewSet):
    queryset         = Street.objects.all()
    serializer_class = StreetSerializer

    def get_queryset(self):
        return Street.objects.all()


class IntersectionViewSet(CoreModelViewSet):
    queryset         = Intersection.objects.all()
    serializer_class = IntersectionSerializer

    def get_queryset(self):
        return Intersection.objects.all()


class StreetInIntersectionViewSet(CoreModelViewSet):
    queryset         = StreetInIntersection.objects.all()
    serializer_class = StreetInIntersectionSerializer

    def get_queryset(self):
        return StreetInIntersection.objects.all()
