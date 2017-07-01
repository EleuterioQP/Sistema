from django.contrib import admin

from .models.producto import Producto
from .models.asociacion import Asociacion
from .models.empresa import Empresa
from .models.compra import Compra
from .models.compra_detalle import Compra_detalle
from .models.agroindustria import Agroindustria
from .models.producto_agroindustria import Producto_agroindustria
from .models.servicio_agroindustria import Servicio_agroindustria
from .models.variedad import Variedad
from .models.productor import Productor
from .models.produccion import Produccion


# Register your models here.


# Register your models here.


class ProductoAdmin(admin.ModelAdmin):

    list_display = ("id", "nombre_cientifico", "beneficios", "cosecha", "disponibilidad", "empaque", "aplicaciones", "presentaciones", "suministra", "tiempo_vida",
                    "zona_produccion", "created_at", "updated_at")
    search_fields = ("nombre_cientifico",)
    list_per_page = 3

admin.site.register(Producto, ProductoAdmin)


class AsociacionAdmin(admin.ModelAdmin):

    list_display = ("id", "actividad", "numero_asociados", "referencia_bancaria", "referencias_comerciales",
                    "created_at", "updated_at")
    search_fields = ("actividad",)
    list_per_page = 3

admin.site.register(Asociacion, AsociacionAdmin)


class EmpresaAdmin(admin.ModelAdmin):

    list_display = ("id", "nombre", "direccion", "email", "facebook", "pagina_web", "pais", "razon_social", "ruc", "telefono",
                    "created_at", "updated_at")
    search_fields = ("nombre",)
    list_per_page = 3

admin.site.register(Empresa, EmpresaAdmin)


class CompraAdmin(admin.ModelAdmin):

    list_display = ("id", "nombre", "cantidad", "total",
                    "created_at", "updated_at")
    search_fields = ("nombre",)
    list_per_page = 3

admin.site.register(Compra, CompraAdmin)


class Compra_detalleAdmin(admin.ModelAdmin):

    list_display = ("id", "autoconsumo", "destino", "lugar_comercializacion", "semilla",
                    "created_at", "updated_at")
    search_fields = ("autoconsumo",)
    list_per_page = 3

admin.site.register(Compra_detalle, Compra_detalleAdmin)


class AgroindustriaAdmin(admin.ModelAdmin):

    list_display = ("id", "capacidad_produccion",
                    "created_at", "updated_at")
    search_fields = ("capacidad_produccion",)
    list_per_page = 3

admin.site.register(Agroindustria, AgroindustriaAdmin)


class Producto_agroindustriaAdmin(admin.ModelAdmin):

    list_display = ("id", "codigo",
                    "created_at", "updated_at")
    search_fields = ("codigo",)
    list_per_page = 3

admin.site.register(Producto_agroindustria, Producto_agroindustriaAdmin)


class Servicio_agroindustriaAdmin(admin.ModelAdmin):

    list_display = ("id", "codigo",
                    "created_at", "updated_at")
    search_fields = ("codigo",)
    list_per_page = 3

admin.site.register(Servicio_agroindustria, Servicio_agroindustriaAdmin)


class VariedadAdmin(admin.ModelAdmin):

    list_display = ("id", "nombre", "area", "cosechas", "production", "siembra", "superficie_perdida", "superficie_verde",
                    "created_at", "updated_at")
    search_fields = ("nombre",)
    list_per_page = 3

admin.site.register(Variedad, VariedadAdmin)


class ProductorAdmin(admin.ModelAdmin):

    list_display = ("id", "agencia_agraria", "comunidad", "ruc",
                    "sector", "representante", "created_at", "updated_at")
    search_fields = ("agencia_agraria",)
    list_per_page = 3

admin.site.register(Productor, ProductorAdmin)


class ProduccionAdmin(admin.ModelAdmin):

    list_display = ("id", "nombre_certificadora", "area_cosechada", "area_perdida", "area_sembrada", "area_total_produccion", "area_total_terreno", "cetificacion_organica",
                    "created_at", "updated_at")
    search_fields = ("nombre_certificadora",)
    list_per_page = 3

admin.site.register(Produccion, ProduccionAdmin)
