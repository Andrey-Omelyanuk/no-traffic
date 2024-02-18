from django.contrib import admin
from .models import City, Street, Intersection, StreetInIntersection

admin.site.register(City)
admin.site.register(Street)
admin.site.register(Intersection)
admin.site.register(StreetInIntersection)
