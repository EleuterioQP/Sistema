from django.conf.urls import url, include
from rest_framework import routers

from .producto_view import ProductoViewSet
from .agroindustria_view import AgroindustriaViewSet
from .asociacion_view import AsociacionViewSet
from .empresa_view import EmpresaViewSet
from .compra_view import CompraViewSet
from .compra_detalle_view import Compra_detalleViewSet
from .produccion_view import ProduccionViewSet
from .producto_agroindustria_view import Producto_agroindustriaViewSet
from .productor_view import ProductorViewSet
from .servicio_agroindustria_view import Servicio_agroindustriaViewSet
from .variedad_view import VariedadViewSet


router = routers.DefaultRouter()

router.register(r'productos', ProductoViewSet, 'productos-view')
router.register(r'agroindustrias', AgroindustriaViewSet, 'agroindustrias-view')
router.register(r'asociacions', AsociacionViewSet, 'asociacions-view')
router.register(r'empresas', EmpresaViewSet, 'empresas-view')
router.register(r'compras', CompraViewSet, 'compras-view')
router.register(r'compra_detalles', Compra_detalleViewSet, 'compra_detalles-view')
router.register(r'produccions', ProduccionViewSet, 'produccions-view')
router.register(r'producto_agroindustrias', Producto_agroindustriaViewSet, 'producto_agroindustrias-view')
router.register(r'productors', ProductorViewSet, 'productors-view')
router.register(r'servicio_agroindustrias', Servicio_agroindustriaViewSet, 'servicio_agroindustrias-view')
router.register(r'variedads', VariedadViewSet, 'variedads-view')


urlpatterns = [

    url(r'^', include(router.urls)),



]
