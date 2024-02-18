import os, sys
from glob import glob

GDAL_LIBRARY_PATH=glob('/usr/lib/libgdal.so.*')[0]
GEOS_LIBRARY_PATH=glob('/usr/lib/libgeos_c.so.*')[0]

DEBUG = os.environ.get('DEBUG', 'False') == 'True'
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SITE_ID = 1
ALLOWED_HOSTS       = os.environ.get('ALLOWED_HOSTS').split(',')
INTERNAL_IPS        = ["127.0.0.1", 'localhost', ]

SECRET_KEY          = os.environ['SECRET_KEY']
DEFAULT_AUTO_FIELD  = 'django.db.models.AutoField'

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'django.contrib.gis',
    # external apps
    'corsheaders',
    'django_extensions',
    'rest_framework',
    # internal apps
    'apps.core',
    'apps.no_traffic',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'main.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'main.wsgi.application'

LANGUAGE_CODE   = 'en-us'
USE_TZ          = True
TIME_ZONE       = 'UTC'

REST_FRAMEWORK = {
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework.parsers.JSONParser',
        'rest_framework.parsers.MultiPartParser',
        'rest_framework.parsers.FileUploadParser',
    ),
    'DEFAULT_FILTER_BACKENDS'   : (
        'apps.core.filters.FilterBackend',
    ),
}

DATABASES = {

    'default': {
        'ENGINE'    : 'django.contrib.gis.db.backends.postgis',
        'HOST'      :     os.environ['DB_HOST'],
        'PORT'      : int(os.environ['DB_PORT']),
        'NAME'      :     os.environ['DB_NAME'],
        'USER'      :     os.environ['DB_USER'],
        'PASSWORD'  :     os.environ['DB_PASSWORD'],
    }
}

CSRF_TRUSTED_ORIGINS = os.environ.get('CSRF_TRUSTED_ORIGINS').split(',')

STATIC_URL = '/back-static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

DEBUG_TOOLBAR = os.environ.get('DEBUG_TOOLBAR', 'False') == 'True'
if DEBUG_TOOLBAR:
    INSTALLED_APPS = INSTALLED_APPS + [
        "debug_toolbar",
        # "django.contrib.staticfiles",
    ]
    MIDDLEWARE = MIDDLEWARE + [
        "debug_toolbar.middleware.DebugToolbarMiddleware",
    ]

    DEBUG_TOOLBAR_CONFIG = {
        'SHOW_TOOLBAR_CALLBACK': lambda _request: DEBUG
    }

AUTH_PASSWORD_VALIDATORS = [] if DEBUG else [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        'OPTIONS': {
            'min_length': 6,
        }
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
    {
        'NAME': 'django_password_validators.password_character_requirements.password_validation.PasswordCharacterValidator',
        'OPTIONS': {
             'min_length_digit': 1,
             'min_length_lower': 1,
             'min_length_upper': 1,
         }
    },
]

REST_FLEX_FIELDS = {
    'EXPAND_PARAM'  : '__relations',
    'FIELDS_PARAM'  : '__fields',
    'OMIT_PARAM'    : '__omit',
}

CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOWED_ORIGINS = [
    "http://localhost",
]
CORS_ALLOW_METHODS = (
    "DELETE",
    "GET",
    "OPTIONS",
    "PATCH",
    "POST",
    "PUT",
)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'stream': sys.stdout,
        },
    },
    'loggers': {
        'main': {
            'handlers': ['console'],
            'level': os.environ.get('LOGGER_MAIN_LEVEL', 'WARNING'),
        },
    },
}
