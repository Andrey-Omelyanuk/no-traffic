from django.db.models import Model, CASCADE, ForeignKey, CharField
from django.contrib.gis.geos import Point
from django.contrib.gis.db.models import PointField 

# Intersection can be outside a city, I ignore this case

class City(Model):
    name = CharField(max_length=64, null=False)

    def __str__(self):
        return f"{self.name}"


class Street(Model):
    city = ForeignKey(City, on_delete=CASCADE, null=False)
    name = CharField(max_length=64, null=False)

    class Meta:
        unique_together = (("city", "name"),)

    def __str__(self):
        return f"{self.city} - {self.name}"


class Intersection(Model):
    name     = CharField(max_length=64, null=False)
    location = PointField(geography=True, default=Point(0.0, 0.0))

    class Meta:
        unique_together = (("name", "location"),)

    def __str__(self):
        return f"{self.name} ({self.location})"

    @property
    def longitude(self):
        return self.location.x

    @property
    def latitude(self):
        return self.location.y


class StreetInIntersection(Model):
    street       = ForeignKey    (Street        , on_delete=CASCADE, null=False)
    intersection = ForeignKey    (Intersection  , on_delete=CASCADE, null=False, related_name='streetsInIntersection')

    class Meta:
        unique_together = (("street", "intersection"),)

    def __str__(self):
        return f"{self.street} - {self.intersection}"
