      var slideout = new Slideout({
          'panel': document.getElementById('panel'),
          'menu': document.getElementById('menu'),
          'padding': 256,
          'tolerance': 70
      });
      $('#img_user').attr('src', imageFolder + localStorage.getItem('foto'));
      $('#nama_user').html(localStorage.getItem('nama'));
      $('#kelas_user').html(localStorage.getItem('kode_kelas'));