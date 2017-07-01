from rest_framework import serializers, viewsets
#from django.db.models import Q
#from operator import __or__ as OR
#from functools import reduce

from medicfastv2_service_apps.topico2.models.agroindustria import Agroindustria


class AgroindustriaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Agroindustria
        fields = '__all__'
        # fields = ('id', 'codigo', 'nombre', 'estado',)
        # read_only_fields = ('id',)
        # exclude = ('users',)


class AgroindustriaViewSet(viewsets.ModelViewSet):
    queryset = Agroindustria.objects.all()
    serializer_class = AgroindustriaSerializer
'''
    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(codigo__icontains=query),
                    Q(nombre__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
'''
