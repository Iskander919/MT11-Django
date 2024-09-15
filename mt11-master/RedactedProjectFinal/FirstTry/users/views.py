from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import UserRegisterForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            # получаем имя пользователя и пароль из формы
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            # выполняем аутентификацию
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('/')
    else:
        form = UserCreationForm()
    return render(request, 'users/signup.html', {'form': form})



@login_required
def profile(request):
    return render(request, 'users/profile.html')


def logout_view(request):
    logout(request)
    return redirect('/') # на главную страницу сайта


# Create your views here.
