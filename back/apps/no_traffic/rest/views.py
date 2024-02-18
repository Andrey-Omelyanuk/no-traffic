from apps.core.rest.views import ReadOnlyModelViewSet
from ..models import City, Street, Intersection, StreetInIntersection
from .serializers import CitySerializer, StreetSerializer, IntersectionSerializer, StreetInIntersectionSerializer


class CityViewSet(ReadOnlyModelViewSet):
    queryset         = City.objects.all()
    serializer_class = CitySerializer

    def get_queryset(self):
        return City.objects.all()


class StreetViewSet(ReadOnlyModelViewSet):
    queryset         = Street.objects.all()
    serializer_class = StreetSerializer

    def get_queryset(self):
        return Street.objects.all()


class IntersectionViewSet(ReadOnlyModelViewSet):
    queryset         = Intersection.objects.all()
    serializer_class = IntersectionSerializer

    def get_queryset(self):
        return Intersection.objects.all()


class StreetInIntersectionViewSet(ReadOnlyModelViewSet):
    queryset         = StreetInIntersection.objects.all()
    serializer_class = StreetInIntersectionSerializer

    def get_queryset(self):
        return StreetInIntersection.objects.all()
