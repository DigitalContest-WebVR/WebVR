from django.conf.urls import include, url
from django.contrib import admin
from . import views

urlpatterns = [
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', views.main, name='main'),
    url(r'^game/$', views.game, name='game'),
    url(r'^update/$', views.update, name='update'),
    url(r'^result/$', views.result, name='result'),
]
