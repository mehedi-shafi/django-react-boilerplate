from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include
from django.conf import settings
from rest_framework.routers import DefaultRouter
from rest_framework.permissions import AllowAny

router = DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/auth/", include("djoser.urls")),
    path("api/auth/", include("djoser.urls.authtoken")),
]

urlpatterns += router.urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
