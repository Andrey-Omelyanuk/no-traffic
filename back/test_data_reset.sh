# Restore data from fixtures.
python manage.py reset_db --noinput
python manage.py migrate

# Core
python manage.py loaddata User Site
# No Traffic 
python manage.py loaddata \
    apps/no_traffic/fixtures/City \
    apps/no_traffic/fixtures/Street \
    apps/no_traffic/fixtures/Intersection \
    apps/no_traffic/fixtures/StreetInIntersection
# I have no idea why it stopped working
# python manage.py loaddata City, Street, Intersection, StreetInIntersection
