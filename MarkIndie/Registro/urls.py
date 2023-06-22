from django.urls import path
from . import views
from .views import CustomLogoutView

urlpatterns = [
    path('logout/', CustomLogoutView.as_view(), name='logout'),
    path('home/', views.home, name='home'),
    path('registro/', views.registro_usuario, name='registro'),
    path('login/', views.login_usuario, name='login'),
    path('registro_juego/', views.registrar_juego, name='registrar_juego'),
    path('juego/<int:juego_id>/', views.detalle_juego, name='detalle_juego'),
    path('mis_juegos/', views.mis_juegos, name='mis_juegos'),
    path('borrar_juego/<int:pk>', views.BorrarJuego.as_view(), name='Borrar_Juego'),
    path('editar_juego/<int:pk>', views.EditarJuego.as_view(), name='Editar_Juego'),
    ]