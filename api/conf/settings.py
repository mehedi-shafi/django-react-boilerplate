"""
Django settings for conf project.

Generated by 'django-admin startproject' using Django 4.0.2.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""

from pathlib import Path
import environ
import os
import pgconnection

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = environ.Path(__file__) - 2
# .env file is one more step above
ENV_DIR = environ.Path(__file__) - 3
# load the environment variables first
env = environ.Env()

# load .env file from ENV_DIR 
env_file = ENV_DIR('.env')
env.read_env(env_file)

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-bh7i2y$4xd3gbb3o-t3*qn48=xb7hqs^(+guw#!h#p14sg!0!+'

DJANGO_ENV = env.str('DJANGO_ENV', default='debug')

DEBUG = False if DJANGO_ENV.lower() == 'production' else True

ALLOWED_HOSTS = env.list('DJANGO_ALLOWED_HOSTS', default=[])


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'django_extensions',
    'djoser',
    "rest_framework.authtoken",
    'rest_framework'
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'conf.urls'
CORS_ORIGIN_ALLOW_ALL = True

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework.authentication.TokenAuthentication",
    ],
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticated",
    ],
    "DEFAULT_FILTER_BACKENDS": [
        "rest_framework.filters.SearchFilter",
        "django_filters.rest_framework.DjangoFilterBackend",
    ],
    "DEFAULT_SCHEMA_CLASS":
    "rest_framework.schemas.coreapi.AutoSchema",
}


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

DJOSER = {
    # "LOGIN_FIELD": "email",
    "PASSWORD_RESET_CONFIRM_URL": "#/password/reset/confirm/{uid}/{token}",
    "USERNAME_RESET_CONFIRM_URL": "#/username/reset/confirm/{uid}/{token}",
    "ACTIVATION_URL": "#/activate/{uid}/{token}",
    "USER_CREATE_PASSWORD_RETYPE": True,
    "SET_PASSWORD_RETYPE": True,
    "PASSWORD_RESET_CONFIRM_RETYPE": True,
    "LOGOUT_ON_PASSWORD_CHANGE": True,
    "SERIALIZERS": {"token": "conf.serializers.TokenAndUserInfoSerializer"},
    "PERMISSIONS": {"user_create": ["rest_framework.permissions.IsAdminUser"]},
}

WSGI_APPLICATION = 'conf.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = pgconnection.configure({
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': env.str('DATABASE_NAME', default='django_test'),
        'USER': env.str('DATABASE_OWNER', default='shafi'),
        'PASSWORD': env.str('DATABASE_PASSWORD'),
        'HOST': env.str('DATABASE_HOST', default='localhost'),
        'PORT': env.int('DATABASE_PORT', default=5432)
    },
})


# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'en-us'
LOCALE_PATHS = [
    BASE_DIR("locale"),
    BASE_DIR("contrib/rest_framework/locale"),
    BASE_DIR("contrib/auth/locale"),
    BASE_DIR("contrib/conf/locale"),
]

TIME_ZONE = 'UTC'
USE_I18N = True

TIME_ZONE = env.str("DEFAULT_TIME_ZONE", default="Asia/Dhaka")
USE_TZ = True

STATIC_ROOT = BASE_DIR("django_static")
STATIC_URL = "/django_static/"

STATICFILES_DIRS = [
    BASE_DIR("assets"),
]

MEDIA_ROOT = env.str("MEDIA_ROOT")
MEDIA_URL = "/media/"

# Site specific settings
SITE_NAME = env.str("SITE_NAME")
ADMIN_SITE_HEADER = env.str("ADMIN_SITE_HEADER")
API_BROWSER_HEADER = env.str("API_BROWSER_HEADER")

SETTINGS_EXPORT = [
    "SITE_NAME",
    "ADMIN_SITE_HEADER",
    "API_BROWSER_HEADER",
]

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
