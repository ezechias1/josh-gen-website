/* ========================================
   Locations - Leaflet Map + Filtering
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Real congregation data from za.joshgen.org
  const locations = [
    // Western Cape - Edgemead (HQ)
    { name: 'Edgemead 08:30AM', address: '17 Menlo Crescent, Edgemead', province: 'Western Cape', lat: -33.8725, lng: 18.5558, directions: 'https://www.google.com/maps/dir/?api=1&destination=Joshua%20Generation%20Church%2C%2017%20Menlo%20Crescent%2C%20Edgemead' },
    { name: 'Edgemead 11AM', address: '17 Menlo Crescent, Edgemead', province: 'Western Cape', lat: -33.8725, lng: 18.5558, directions: 'https://www.google.com/maps/dir/?api=1&destination=Joshua%20Generation%20Church%2C%2017%20Menlo%20Crescent%2C%20Edgemead' },
    { name: 'Edgemead PM', address: '17 Menlo Crescent, Edgemead', province: 'Western Cape', lat: -33.8725, lng: 18.5558, directions: 'https://www.google.com/maps/dir/?api=1&destination=Joshua%20Generation%20Church%2C%2017%20Menlo%20Crescent%2C%20Edgemead' },

    // Western Cape - Sunningdale
    { name: 'Sunningdale 08:30AM', address: '12 Wingate Crescent, Sunningdale, Cape Town, 7441', province: 'Western Cape', lat: -33.8194, lng: 18.5067, directions: 'https://www.google.com/maps/dir/?api=1&destination=12%20Wingate%20Crescent%2C%20Sunningdale%2C%20Cape%20Town%2C%207441' },
    { name: 'Sunningdale 11AM', address: '12 Wingate Crescent, Sunningdale, Cape Town, 7441', province: 'Western Cape', lat: -33.8194, lng: 18.5067, directions: 'https://www.google.com/maps/dir/?api=1&destination=12%20Wingate%20Crescent%2C%20Sunningdale%2C%20Cape%20Town%2C%207441' },
    { name: 'Sunningdale PM', address: '12 Wingate Crescent, Sunningdale, Cape Town, 7441', province: 'Western Cape', lat: -33.8194, lng: 18.5067, directions: 'https://www.google.com/maps/dir/?api=1&destination=12%20Wingate%20Crescent%2C%20Sunningdale%2C%20Cape%20Town%2C%207441' },

    // Western Cape - Durbanville / Pinehurst
    { name: 'Durbanville AM', address: 'Cnr Brackenfell Blvd & Amadeus Dr, Pinehurst', province: 'Western Cape', lat: -33.8686, lng: 18.6453, directions: 'https://www.google.com/maps/dir/?api=1&destination=Cnr%20Brackenfell%20Blvd%20%26%20Amadeus%20Dr%2C%20Pinehurst' },
    { name: 'Durbanville PM', address: 'Cnr Brackenfell Blvd & Amadeus Dr, Pinehurst', province: 'Western Cape', lat: -33.8686, lng: 18.6453, directions: 'https://www.google.com/maps/dir/?api=1&destination=Cnr%20Brackenfell%20Blvd%20%26%20Amadeus%20Dr%2C%20Pinehurst' },
    { name: 'Durbanville Central', address: 'Cnr Brackenfell Blvd & Amadeus Dr, Pinehurst', province: 'Western Cape', lat: -33.8686, lng: 18.6453, directions: 'https://www.google.com/maps/dir/?api=1&destination=Cnr%20Brackenfell%20Blvd%20%26%20Amadeus%20Dr%2C%20Pinehurst' },
    { name: 'Pinehurst PM', address: 'Cnr Brackenfell Blvd & Amadeus Dr, Pinehurst', province: 'Western Cape', lat: -33.8686, lng: 18.6453, directions: 'https://www.google.com/maps/dir/?api=1&destination=Cnr%20Brackenfell%20Blvd%20%26%20Amadeus%20Dr%2C%20Pinehurst' },

    // Western Cape - Stellenbosch
    { name: 'Stellenbosch Central', address: '8 Van Riebeek Street, Stellenbosch Central', province: 'Western Cape', lat: -33.9346, lng: 18.8602, directions: 'https://www.google.com/maps/dir/?api=1&destination=8%20Van%20Riebeek%20Street%2C%20Stellenbosch%20Central' },
    { name: 'Stellenbosch AM', address: '172 Merriman Ave, Stellenbosch Central, 7600', province: 'Western Cape', lat: -33.9320, lng: 18.8650, directions: 'https://www.google.com/maps/dir/?api=1&destination=172%20Merriman%20Ave%2C%20Stellenbosch%20Central%2C%20Stellenbosch%2C%207600' },
    { name: 'Stellenbosch PM', address: '10 Koch Rd, Krigeville, Stellenbosch, 7600', province: 'Western Cape', lat: -33.9280, lng: 18.8560, directions: 'https://www.google.com/maps/dir/?api=1&destination=10%20Koch%20Rd%2C%20Krigeville%2C%20Stellenbosch%2C%207600' },

    // Western Cape - Wellington
    { name: 'Wellington AM', address: 'Provence, Milner, Wellington, 7654', province: 'Western Cape', lat: -33.6393, lng: 19.0112, directions: 'https://www.google.com/maps/dir/?api=1&destination=Provence%2C%20Milner%2C%20Wellington%2C%207654' },
    { name: 'Wellington PM', address: 'Provence, Milner, Wellington, 7654', province: 'Western Cape', lat: -33.6393, lng: 19.0112, directions: 'https://www.google.com/maps/dir/?api=1&destination=Provence%2C%20Milner%2C%20Wellington%2C%207654' },

    // Western Cape - Paarl
    { name: 'Paarl', address: '81 Klein Parys Avenue, Klein Parys, Paarl', province: 'Western Cape', lat: -33.7271, lng: 18.9706, directions: 'https://www.google.com/maps/dir/?api=1&destination=81%20Klein%20Parys%20Avenue%2C%20Klein%20Parys%2C%20Paarl' },

    // Western Cape - George
    { name: 'George AM', address: '18 CJ Langenhoven Road, George Central', province: 'Western Cape', lat: -33.9630, lng: 22.4614, directions: 'https://www.google.com/maps/dir/?api=1&destination=18%20CJ%20Langenhoven%20Road%2C%20George%20Central' },
    { name: 'George PM', address: '18 CJ Langenhoven Road, George Central', province: 'Western Cape', lat: -33.9630, lng: 22.4614, directions: 'https://www.google.com/maps/dir/?api=1&destination=18%20CJ%20Langenhoven%20Road%2C%20George%20Central' },

    // Western Cape - Mossel Bay
    { name: 'Mossel Bay AM', address: '65 Mc Kinnery St, Mossel Bay, 6500', province: 'Western Cape', lat: -34.1833, lng: 22.1500, directions: 'https://www.google.com/maps/dir/?api=1&destination=65%20Mc%20Kinnery%20St%2C%20Mossel%20Bay%2C%206500' },
    { name: 'Mossel Bay PM', address: '65 Mc Kinnery St, Mossel Bay, 6500', province: 'Western Cape', lat: -34.1833, lng: 22.1500, directions: 'https://www.google.com/maps/dir/?api=1&destination=65%20Mc%20Kinnery%20St%2C%20Mossel%20Bay%2C%206500' },

    // Western Cape - Cape Town
    { name: 'City Bowl AM', address: '54 Newmarket Street, Foreshore, Cape Town, 8001', province: 'Western Cape', lat: -33.9200, lng: 18.4300, directions: 'https://www.google.com/maps/dir/?api=1&destination=54%20Newmarket%20Street%2C%20Foreshore%2C%20Cape%20Town%2C%208001' },
    { name: 'Woodstock', address: '54 Newmarket Street, Foreshore, Cape Town, 8001', province: 'Western Cape', lat: -33.9250, lng: 18.4450, directions: 'https://www.google.com/maps/dir/?api=1&destination=54%20Newmarket%20Street%2C%20Foreshore%2C%20Cape%20Town%2C%208001' },
    { name: 'Sea Point', address: '5 Norfolk Rd, Sea Point, Cape Town', province: 'Western Cape', lat: -33.9167, lng: 18.3833, directions: 'https://www.google.com/maps/dir/?api=1&destination=5%20Norfolk%20Rd%2C%20Sea%20Point%2C%20Cape%20Town%2C%20South%20Africa' },
    { name: 'Wynberg', address: 'Simon van der Stel Primary School, 174 Carr Hill Road, Wynberg', province: 'Western Cape', lat: -34.0000, lng: 18.4667, directions: 'https://www.google.com/maps/dir/?api=1&destination=Simon%20van%20der%20Stel%20Primary%20School%2C%20174%20Carr%20Hill%20Road%2C%20Wynberg' },
    { name: 'Muizenberg', address: 'Community Hall, 3 Wherry Road, Muizenberg', province: 'Western Cape', lat: -34.1000, lng: 18.4700, directions: 'https://www.google.com/maps/dir/?api=1&destination=Community%20Hall%2C%203%20Wherry%20Road%2C%20Muizenberg' },
    { name: 'Milnerton', address: 'Seamount Primary School, Ixia Street, Milnerton', province: 'Western Cape', lat: -33.8700, lng: 18.5100, directions: 'https://www.google.com/maps/dir/?api=1&destination=Seamount%20Primary%20School%2C%20Ixia%20Street%2C%20Milnerton%2C%20Cape%20Town%2C%20South%20Africa' },
    { name: 'Melkbosstrand', address: 'Otto du Plessis Dr, Melkbosstrand, Cape Town, 7441', province: 'Western Cape', lat: -33.7200, lng: 18.4800, directions: 'https://www.google.com/maps/dir/?api=1&destination=Otto%20du%20Plessis%20Dr%2C%20Melkbosstrand%2C%20Cape%20Town%2C%207441' },
    { name: 'Khayelitsha', address: 'Corner of Pama and Japtha K Masemola Road, 34 Bhemye Crescent, L-Section', province: 'Western Cape', lat: -34.0443, lng: 18.6770, directions: 'https://www.google.com/maps/dir/?api=1&destination=Corner%20of%20Pama%20and%20Japtha%20K%20Masemola%20Road%2C%2034%20Bhemye%20Crescent%2C%20L-Section%20%28Site%20B%29' },
    { name: 'Dunoon', address: '28 McLaren Dr, Killarney Gardens, Cape Town, 7421', province: 'Western Cape', lat: -33.8150, lng: 18.5500, directions: 'https://www.google.com/maps/dir/?api=1&destination=28%20McLaren%20Dr%2C%20Killarney%20Gardens%2C%20Cape%20Town%2C%207421%2C%20South%20Africa' },

    // Western Cape - Somerset West / Gordon's Bay / Grabouw
    { name: 'Somerset West', address: 'Beaumont Primary School, Van Der Merwe Rd, Somerset West', province: 'Western Cape', lat: -34.0847, lng: 18.8432, directions: 'https://www.google.com/maps/dir/?api=1&destination=Beaumont%20Primary%20School%2C%20Van%20Der%20Merwe%20Rd%2C%20Somerset%20West' },
    { name: "Gordon's Bay", address: '2 Firlands Minor Rd, Firlands, Cape Town, 7130', province: 'Western Cape', lat: -34.1600, lng: 18.8700, directions: 'https://www.google.com/maps/dir/?api=1&destination=2%20Firlands%20Minor%20Rd%2C%20Firlands%2C%20Cape%20Town%2C%207130' },
    { name: 'Grabouw', address: 'Applewood Prep School, 10 Appletiser Road, Elgin', province: 'Western Cape', lat: -34.1500, lng: 19.0167, directions: 'https://www.google.com/maps/dir/?api=1&destination=Applewood%20Prep%20School%2C%2010%20Appletiser%20Road%2C%20Elgin%2C%20South%20Africa' },

    // Western Cape - Overberg
    { name: 'Hermanus', address: 'Sandbaai Hall, Cnr Jimmy Smith & Main Road, Hermanus', province: 'Western Cape', lat: -34.4187, lng: 19.2345, directions: 'https://www.google.com/maps/dir/?api=1&destination=Sandbaai%20Hall%2C%20Cnr%20Jimmy%20Smith%20%26%20Main%20Road%2C%20Hermanus' },
    { name: 'Bredasdorp', address: '22 All Saints Road, Bredasdorp', province: 'Western Cape', lat: -34.5333, lng: 20.0500, directions: 'https://www.google.com/maps/dir/?api=1&destination=22%20All%20Saints%20Road%2C%20Bredasdorp' },
    { name: 'Swellendam', address: '157 Voortrek Street, Swellendam', province: 'Western Cape', lat: -34.0200, lng: 20.4400, directions: 'https://www.google.com/maps/dir/?api=1&destination=157%20Voortrek%20Street%2C%20Swellendam' },

    // Western Cape - Winelands
    { name: 'Robertson', address: 'Robertson Laerskool (Primary) School Hall, Dirkie Uys St, Robertson, 6705', province: 'Western Cape', lat: -33.8000, lng: 19.8833, directions: 'https://www.google.com/maps/dir/?api=1&destination=Robertson%20Laerskool%20%28Primary%29%20School%20Hall%2C%20Dirkie%20Uys%20St%2C%20Robertson%2C%206705' },
    { name: 'Montagu', address: '9 Mark Street, Bergsig, Montagu', province: 'Western Cape', lat: -33.7833, lng: 20.1500, directions: 'https://www.google.com/maps/dir/?api=1&destination=9%20Mark%20Street%2C%20Bergsig%2C%20Montagu%2C%20South%20Africa' },
    { name: 'Bonnievale PM', address: 'Weltevrede Wine Estate, R317, Bonnievale', province: 'Western Cape', lat: -33.9300, lng: 20.1000, directions: 'https://www.google.com/maps/dir/?api=1&destination=Weltevrede%20Wine%20Estate%2C%20R317%2C%20Bonnievale%2C%20South%20Africa' },
    { name: 'Worcester', address: '10 Boundary Rd, Worcester West, Worcester, 6850', province: 'Western Cape', lat: -33.6468, lng: 19.4481, directions: 'https://www.google.com/maps/dir/?api=1&destination=10%20Boundary%20Rd%2C%20Worcester%20West%2C%20Worcester%2C%206850' },
    { name: 'De Doorns', address: '1 Kerk Straat, De Doorns, 6875', province: 'Western Cape', lat: -33.4833, lng: 19.6667, directions: 'https://www.google.com/maps/dir/?api=1&destination=1%20Kerk%20Straat%2C%20De%20Doorns%2C%206875' },

    // Western Cape - West Coast
    { name: 'Malmesbury', address: 'Sanlam Centre, 8 Piet Retief St, Malmesbury', province: 'Western Cape', lat: -33.4619, lng: 18.7280, directions: 'https://www.google.com/maps/dir/?api=1&destination=Sanlam%20Centre%2C%208%20Piet%20Retief%20St%2C%20Malmesbury' },
    { name: 'Langebaan', address: 'Waschklip Accommodation, Oostewal Road, Langebaan', province: 'Western Cape', lat: -33.0900, lng: 18.0200, directions: 'https://www.google.com/maps/dir/?api=1&destination=Waschklip%20Accomodation%2C%20Farm%2C%20Oostewal%20Road%2C%20Oostewal%2C%20Langebaan%2C%20South%20Africa' },
    { name: 'Yzerfontein', address: '25 Dolfyn Straat, Yzerfontein, 7351', province: 'Western Cape', lat: -33.3500, lng: 18.1700, directions: 'https://www.google.com/maps/dir/?api=1&destination=25%20Dolfyn%20Straat%2C%20Yzerfontein%2C%207351' },

    // Western Cape - Garden Route
    { name: 'Hartenbos', address: '21 Mascador Road, Voorbaai Crescent, Mossel Bay', province: 'Western Cape', lat: -34.1200, lng: 22.1200, directions: 'https://www.google.com/maps/dir/?api=1&destination=21%20Mascador%20road%2C%20Voorbaai%20Cresent%2C%20Mossel%20Bay' },
    { name: 'Sonskyn Vallei', address: 'Sonskyn Valley Community Hall, Cumpiro Street, Sonskynvallei, Hartenbos, 6520', province: 'Western Cape', lat: -34.1100, lng: 22.1100, directions: 'https://www.google.com/maps/dir/?api=1&destination=Sonskyn%20Valley%20Community%20Hall%2C%20Cumpiro%20Street%2C%20Sonskynvallei%2C%20Hartenbos%2C%206520' },
    { name: 'Still Bay', address: 'Community Hall, Still Bay West', province: 'Western Cape', lat: -34.3700, lng: 21.4200, directions: 'https://www.google.com/maps/dir/?api=1&destination=Community%20Hall%2C%20Still%20Bay%20West' },
    { name: 'Oudtshoorn', address: 'Wesbank Primary School, 30 Vrede Street, Oudtshoorn', province: 'Western Cape', lat: -33.5900, lng: 22.2025, directions: 'https://www.google.com/maps/dir/?api=1&destination=Wesbank%20Primary%20School%2C%2030%20Vrede%20Street%2C%20Oudtshoorn' },

    // Eastern Cape
    { name: 'Willowmore', address: 'Willowmore, Eastern Cape', province: 'Eastern Cape', lat: -33.2933, lng: 23.4900, directions: 'https://www.google.com/maps/dir/?api=1&destination=Willowmore%2C%20Eastern%20Cape' },

    // Free State
    { name: 'Bloemfontein', address: '54 Rose Ave, Wilgehof, Bloemfontein, 9301', province: 'Free State', lat: -29.0852, lng: 26.1596, directions: 'https://www.google.com/maps/dir/?api=1&destination=54%20Rose%20Ave%2C%20Wilgehof%2C%20Bloemfontein%2C%209301' },
    { name: 'Bethlehem', address: '96 Cambridge Straat, Bethlehem, 9701', province: 'Free State', lat: -28.2308, lng: 28.3069, directions: 'https://www.google.com/maps/dir/?api=1&destination=96%20Cambridge%20Straat%2C%20Bethlehem%2C%209701%2C%20South%20Africa' },

    // Northern Cape
    { name: 'Kimberley', address: 'Newton Primary School, Halkett Road, New Park, Kimberley', province: 'Northern Cape', lat: -28.7283, lng: 24.7499, directions: 'https://www.google.com/maps/dir/?api=1&destination=Newton%20Primary%20School%2C%20Halkett%20Road%2C%20New%20Park%2C%20Kimberley%2C%20South%20Africa' },

    // North West
    { name: 'Potchefstroom', address: '99 Molen St, Potchefstroom, 2520', province: 'North West', lat: -26.7145, lng: 27.0970, directions: 'https://www.google.com/maps/dir/?api=1&destination=99%20Molen%20St%2C%20Potchefstroom%2C%202520' },

    // Zimbabwe
    { name: 'Harare Central', address: "Saint Catherine's School, 2 Midlothian Avenue, Eastlea, Harare", province: 'Zimbabwe', lat: -17.8292, lng: 31.0522, directions: 'https://www.google.com/maps/dir/?api=1&destination=Saint%20Catherine%27s%20School%2C%202%20Midlothian%20Avenue%2C%20Eastlea%2C%20Harare%2C%20Zimbabwe' },
    { name: 'Tafara', address: '12557 Tafara Way, Harare, Zimbabwe', province: 'Zimbabwe', lat: -17.8400, lng: 31.1300, directions: 'https://www.google.com/maps/dir/?api=1&destination=12557%20Tafara%20Way%2C%20Harare%2C%20Zimbabwe' },
  ];

  // Initialize Leaflet map
  const mapEl = document.getElementById('map');
  if (mapEl) {
    const map = L.map('map').setView([-30.5595, 22.9375], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Custom marker icon
    const markerIcon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="background:#2b7de9;width:12px;height:12px;border-radius:50%;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });

    // Deduplicate markers by lat/lng to avoid stacking
    const seen = new Set();
    locations.forEach(loc => {
      const key = `${loc.lat},${loc.lng}`;
      if (!seen.has(key)) {
        seen.add(key);
        // Find all services at this location
        const atLocation = locations.filter(l => l.lat === loc.lat && l.lng === loc.lng);
        const names = atLocation.map(l => l.name).join('<br>');
        L.marker([loc.lat, loc.lng], { icon: markerIcon })
          .addTo(map)
          .bindPopup(`<strong>${names}</strong><br>${loc.address}`);
      }
    });
  }

  // Render location cards grouped by province
  const listEl = document.getElementById('locationsList');
  const countEl = document.getElementById('locationsCount');
  const searchInput = document.getElementById('locationSearch');

  function renderLocations(filter = '') {
    const lowerFilter = filter.toLowerCase();
    const filtered = locations.filter(loc =>
      loc.name.toLowerCase().includes(lowerFilter) ||
      loc.address.toLowerCase().includes(lowerFilter) ||
      loc.province.toLowerCase().includes(lowerFilter)
    );

    // Group by province
    const grouped = {};
    filtered.forEach(loc => {
      if (!grouped[loc.province]) grouped[loc.province] = [];
      grouped[loc.province].push(loc);
    });

    // Sort provinces alphabetically
    const sortedProvinces = Object.keys(grouped).sort();

    let html = '';
    sortedProvinces.forEach(province => {
      html += `
        <div class="province-group">
          <h3 class="province-group__title">${province} (${grouped[province].length})</h3>
          <div class="province-group__grid">
            ${grouped[province].map(loc => `
              <div class="location-card">
                <div class="location-card__pin">📍</div>
                <div class="location-card__info">
                  <div class="location-card__name">${loc.name}</div>
                  <div class="location-card__address">${loc.address}</div>
                </div>
                <div class="location-card__actions">
                  <a href="${loc.directions}" target="_blank" rel="noopener">Directions →</a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });

    listEl.innerHTML = html || '<p style="text-align:center;color:var(--color-text-light);">No locations found matching your search.</p>';
    countEl.textContent = `${filtered.length} location${filtered.length !== 1 ? 's' : ''} found`;
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderLocations(e.target.value);
    });
  }

  renderLocations();

  // Accordion toggle for province groups
  listEl.addEventListener('click', (e) => {
    const title = e.target.closest('.province-group__title');
    if (!title) return;
    const group = title.parentElement;
    group.classList.toggle('open');
  });

  // Find Near Me - geolocation
  window.findNearMe = function() {
    const btn = document.getElementById('findNearMe');
    btn.textContent = 'Locating...';
    if (!navigator.geolocation) {
      btn.textContent = '📍 Find Near Me';
      alert('Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      const userLat = pos.coords.latitude;
      const userLng = pos.coords.longitude;

      // Calculate distance to each location
      const withDistance = locations.map(loc => {
        const dLat = (loc.lat - userLat) * Math.PI / 180;
        const dLng = (loc.lng - userLng) * Math.PI / 180;
        const a = Math.sin(dLat/2)**2 + Math.cos(userLat*Math.PI/180) * Math.cos(loc.lat*Math.PI/180) * Math.sin(dLng/2)**2;
        const km = 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return { ...loc, distance: km };
      });

      // Sort by distance and show top 5
      withDistance.sort((a, b) => a.distance - b.distance);
      const nearest = withDistance.slice(0, 5);

      let html = '<div class="province-group open"><h3 class="province-group__title">Nearest to You (' + nearest.length + ')</h3><div class="province-group__grid" style="display:grid;">';
      nearest.forEach(loc => {
        html += '<div class="location-card"><div class="location-card__pin">📍</div><div class="location-card__info"><div class="location-card__name">' + loc.name + '</div><div class="location-card__address">' + loc.address + ' — ' + loc.distance.toFixed(1) + ' km away</div></div><div class="location-card__actions"><a href="' + loc.directions + '" target="_blank" rel="noopener">Directions →</a></div></div>';
      });
      html += '</div></div>';

      listEl.innerHTML = html + listEl.innerHTML;
      listEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Pan map to user location
      map.setView([userLat, userLng], 10);
      L.marker([userLat, userLng], { icon: L.divIcon({ className: '', html: '<div style="background:#2b7de9;width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 0 6px rgba(0,0,0,0.3);"></div>', iconSize: [14,14], iconAnchor: [7,7] }) }).addTo(map).bindPopup('You are here');

      btn.textContent = '📍 Find Near Me';
    }, () => {
      btn.textContent = '📍 Find Near Me';
      alert('Unable to get your location. Please check your browser permissions.');
    });
  };
});
