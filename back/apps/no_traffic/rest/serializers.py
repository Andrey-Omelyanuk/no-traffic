from rest_framework.serializers import PrimaryKeyRelatedField
from apps.core.rest.serializers import CoreModelSerializer
from ..models import City, Street, Intersection, StreetInIntersection


class CitySerializer(CoreModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class StreetSerializer(CoreModelSerializer):
    city_id = PrimaryKeyRelatedField(source='city', queryset=City.objects.all())

    class Meta:
        model = Street
        exclude = ('city', )
        expandable_fields = {
            'city': CitySerializer,
        }


class IntersectionSerializer(CoreModelSerializer):
    class Meta:
        model = Intersection
        fields = '__all__'
        expandable_fields = {
            'streetsInIntersection': ('apps.no_traffic.rest.serializers.StreetInIntersectionSerializer', {'many': True}),
        }


class StreetInIntersectionSerializer(CoreModelSerializer):
    street_id       = PrimaryKeyRelatedField(source='street', queryset=Street.objects.all())
    intersection_id = PrimaryKeyRelatedField(source='intersection', queryset=Intersection.objects.all())

    class Meta:
        model = StreetInIntersection 
        exclude = ('street', 'intersection', )
        expandable_fields = {
            'street': StreetSerializer,
            'intersection': IntersectionSerializer,
        }
