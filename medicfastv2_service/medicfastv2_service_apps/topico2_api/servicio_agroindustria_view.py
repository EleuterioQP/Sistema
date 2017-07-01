from rest_framework import serializers, viewsets
#from django.db.models import Q
#from operator import __or__ as OR
#from functools import reduce

from medicfastv2_service_apps.topico2.models.servicio_agroindustria import Servicio_agroindustria


class Servicio_agroindustriaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Servicio_agroindustria
        fields = '__all__'
        # fields = ('id', 'codigo', 'nombre', 'estado',)
        # read_only_fields = ('id',)
        # exclude = ('users',)


class Servicio_agroindustriaViewSet(viewsets.ModelViewSet):
    queryset = Servicio_agroindustria.objects.all()
    serializer_class = Servicio_agroindustriaSerializer
'''
    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(codigo__icontains=query),
                    Q(nombre__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
'''
