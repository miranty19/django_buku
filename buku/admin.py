from django.contrib import admin
from buku.models import *

class ABuku (admin.ModelAdmin):
    list_display = ['id_buku','judul_buku']
    list_filter = ()
    search_fields = ['judul_buku']
    list_per_page = 25

admin.site.register(TBuku, ABuku)

class AKategori (admin.ModelAdmin):
    list_display = ['id_kategori','kategori']
    list_filter = ()
    search_fields = ['kategori']
    list_per_page = 25

admin.site.register(TKategori, AKategori)
