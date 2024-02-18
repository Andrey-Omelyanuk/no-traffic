# Core
rm apps/core/fixtures/*
python manage.py dumpdata --format=yaml -o apps/core/fixtures/Site.yaml sites.Site
python manage.py dumpdata --format=yaml -o apps/core/fixtures/User.yaml auth.User
# No Traffic 
rm apps/no_traffic/fixtures/*
python manage.py dumpdata --format=yaml -o apps/no_traffic/fixtures/City.yaml                 no_traffic.City
python manage.py dumpdata --format=yaml -o apps/no_traffic/fixtures/Street.yaml               no_traffic.Street
python manage.py dumpdata --format=yaml -o apps/no_traffic/fixtures/Intersection.yaml         no_traffic.Intersection
python manage.py dumpdata --format=yaml -o apps/no_traffic/fixtures/StreetInIntersection.yaml no_traffic.StreetInIntersection
