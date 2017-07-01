from django.db import models
from medicfastv2_service_apps.auths.models.user import User


class Empresa(models.Model):

    nombre = models.CharField(max_length=40)
    direccion = models.CharField(max_length=40, null=True, blank=True)
    email = models.CharField(max_length=40, null=True, blank=True)
    facebook = models.CharField(max_length=20, null=True, blank=True)
    pagina_web = models.CharField(max_length=40, null=True, blank=True)

    pais = models.CharField(max_length=70, null=True, blank=True)
    razon_social = models.IntegerField(null=True, blank=True)
    ruc = models.IntegerField(null=True, blank=True)
    telefono = models.IntegerField(null=True, blank=True)

    usuario = models.ForeignKey(User, blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Empresa"
        verbose_name_plural = "Empresas"

        permissions = (
            ('list_empresa', 'Can list empresa'),
            ('get_empresa', 'Can get empresa'),
        )

    def __str__(self):
        return self.nombre
