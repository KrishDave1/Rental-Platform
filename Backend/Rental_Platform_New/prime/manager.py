from django.contrib.auth.base_user import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, phone_Number, password=None, **extra_fields):
        if(not phone_Number):
            raise ValueError("Phone number is required")
        extra_fields['email'] = self.normalize_email(extra_fields['email'])
        user = self.model(phone_Number=phone_Number, password=password, **extra_fields)
        user.set_password(password)
        user.save(using=self.db)
        return user
    
    def create_superuser(self, phone_Number, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        return self.create_user(phone_Number=phone_Number, password=password, **extra_fields)
    
    