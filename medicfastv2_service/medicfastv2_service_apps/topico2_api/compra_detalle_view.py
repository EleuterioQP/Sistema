from rest_framework import serializers, viewsets
#from django.db.models import Q
#from operator import __or__ as OR
#from functools import reduce

from medicfastv2_service_apps.topico2.models.compra_detalle import Compra_detalle


class Compra_detalleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Compra_detalle
        fields = '__all__'
        # fields = ('id', 'codigo', 'nombre', 'estado',)
        # read_only_fields = ('id',)
        # exclude = ('users',)


class Compra_detalleViewSet(viewsets.ModelViewSet):
    queryset = Compra_detalle.objects.all()
    serializer_class = Compra_detalleSerializer
'''
    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(codigo__icontains=query),
                    Q(nombre__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
'''
