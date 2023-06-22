
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import SignUpForm, LoginForm
from .forms import JuegoForm, ImagenForm
from .models import CustomUser, Imagen, Juego
from django.contrib.auth.views import LogoutView
from django.urls import reverse_lazy
from django.core.paginator import Paginator
from django.shortcuts import render, get_object_or_404
from django.views.generic import UpdateView, DeleteView

class CustomLogoutView(LogoutView):
    next_page = reverse_lazy('home')  # Redirige al usuario a la página de inicio después de cerrar sesión

def mis_juegos(request):
    juegos = Juego.objects.all()
    return render(request, 'registro/mis_juegos.html', {'juegos': juegos})

def detalle_juego(request, juego_id):
    juego = get_object_or_404(Juego, pk=juego_id)
    # Aquí puedes realizar cualquier procesamiento adicional antes de pasar los datos a la plantilla
    return render(request, 'registro/detalle_juego.html', {'juego': juego})

def registrar_juego(request):
    if request.method == 'POST':
        juego_form = JuegoForm(request.POST)
        imagen_form = ImagenForm(request.POST, request.FILES)
        if juego_form.is_valid() and imagen_form.is_valid():
            juego = juego_form.save()
            for imagen in request.FILES.getlist('imagen'):
                Imagen.objects.create(juego=juego, imagen=imagen)
            return redirect('home')  # Cambia 'home' por la URL a la que quieres redirigir después de registrar el juego
    else:
        juego_form = JuegoForm()
        imagen_form = ImagenForm()
    return render(request, 'registro/registrar_juego.html', {'juego_form': juego_form, 'imagen_form': imagen_form})

def registro_usuario(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            email = form.cleaned_data.get('email')
            is_developer = form.cleaned_data.get('is_developer')
            full_name = form.cleaned_data.get('full_name')
            phone_number = form.cleaned_data.get('phone_number')
            
            # Crear una instancia de CustomUser
            user = CustomUser.objects.create_user(
                username=username,
                password=password,
                email=email,
                is_developer=is_developer,
                full_name=full_name,
                phone_number=phone_number
            )

            login(request, user)
            return redirect('home')  # Cambia 'home' por la URL a la que quieres redirigir al usuario después del registro
    else:
        form = SignUpForm()
    return render(request, 'registro/registro_usuario.html', {'form': form})


def login_usuario(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')  # Cambia 'home' por la URL a la que quieres redirigir al usuario después del inicio de sesión
    else:
        form = LoginForm()
    return render(request, 'registro/login_usuario.html', {'form': form})

def home(request):
    juegos = Juego.objects.all()
    paginator = Paginator(juegos, 30)  # Mostrar 30 juegos por página
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'registro/home.html', {'page_obj': page_obj, 'juegos': juegos})

class EditarJuego(UpdateView):
    model = Juego
    form_class = JuegoForm
    template_name = 'registro/editar_juego.html'
    success_url = reverse_lazy('mis_juegos')
    
class BorrarJuego(DeleteView):
    model = Juego
    template_name = 'registro/Borrar_Juego.html'
    success_url = reverse_lazy('mis_juegos')
