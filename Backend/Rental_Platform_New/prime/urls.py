from django.urls import path
from prime import views

urlpatterns = [
    path('', view=views.user_List),
    path('products/', view=views.product_List),
    path('login/', view=views.LoginView.as_view()),
    path('logout/', view=views.LogoutView.as_view()),
    path('register/', view=views.RegisterView.as_view()),
    path('user/', view=views.UserView.as_view())
]