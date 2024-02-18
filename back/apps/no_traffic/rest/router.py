from .views import CityViewSet, StreetViewSet, IntersectionViewSet, StreetInIntersectionViewSet


def no_traffic(router):
    router.register(r'city'                     , CityViewSet)
    router.register(r'street'                   , StreetViewSet)
    router.register(r'intersection'             , IntersectionViewSet)
    router.register(r'street-in-intersection'   , StreetInIntersectionViewSet)
