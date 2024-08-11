from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include
from django.conf import settings
from rest_framework.routers import DefaultRouter
from rest_framework.permissions import AllowAny

from django.http import HttpResponse
from django.template import loader

router = DefaultRouter()


def get_test_html(request):
    tempate = loader.get_template("test.html")
    return HttpResponse(tempate.render({}, request))


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/auth/", include("djoser.urls")),
    path("api/auth/", include("djoser.urls.authtoken")),
    path("api/test_html", get_test_html),
]

urlpatterns += router.urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
