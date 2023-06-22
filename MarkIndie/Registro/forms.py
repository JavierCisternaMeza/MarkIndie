from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser, Juego, Tag, Imagen
from django.forms import ClearableFileInput

class JuegoForm(forms.ModelForm):
    tags = forms.ModelMultipleChoiceField(queryset=Tag.objects.all(), widget=forms.CheckboxSelectMultiple, to_field_name='nombre')
    
    class Meta:
        model = Juego
        fields = ['nombre', 'tags', 'precio']

class ImagenForm(forms.ModelForm):
    class Meta:
        model = Imagen
        fields = ['imagen']
        widgets = {'imagen': forms.ClearableFileInput(attrs={"allow_multiple_selected": True})}


class SignUpForm(UserCreationForm):
    is_developer = forms.BooleanField(required=False)
    
    class Meta:
        model = CustomUser
        fields = ('username', 'password1', 'password2', 'email', 'is_developer', 'full_name', 'phone_number')

class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)
