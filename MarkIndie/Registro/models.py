
from django.db import models
from django.contrib.auth.models import AbstractUser

class Tag(models.Model):
    nombre = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nombre

class Juego(models.Model):
    codigo = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    tags = models.ManyToManyField(Tag)
    precio = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    
    def __str__(self):
        return self.codigo, self.nombre, self.tags

class Imagen(models.Model):
    juego = models.ForeignKey(Juego, on_delete=models.CASCADE)
    imagen = models.ImageField(upload_to='imagenes_juegos/')

class CustomUser(AbstractUser):
    is_developer = models.BooleanField(default=False)
    full_name = models.CharField(max_length=255, blank=True)
    phone_number = models.CharField(max_length=20, blank=True)
    
    def __str__(self):
        return self.username

    # Agregar 'related_name' en los campos 'groups' y 'user_permissions'
    groups = models.ManyToManyField('auth.Group', related_name='customuser_set', blank=True)
    user_permissions = models.ManyToManyField('auth.Permission', related_name='customuser_set', blank=True)

    # Aquí puedes agregar cualquier campo adicional que necesites para el usuario

