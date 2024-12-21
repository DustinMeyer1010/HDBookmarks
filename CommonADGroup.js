function loadPage() {
  filterSearch();
  const filter = document.getElementById("filter-search");
  filter.value = "";
  
}


function filterSearch() {
  let build = "";
  const filter = document.getElementById("filter-search");
  let ad_groups = document.getElementById("ad-groups");

  ad_groups.innerHTML = "";

  // All AD groups
  adGroups = [  
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_CTX_eRecord</span>
      
      <span class="description">eRecord Icon for Citrix</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_CTX_eRecord2</span>
      
      <span class="description">eRecord Icon for Citrix</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_CTX_ePartner</span>
      
      <span class="description">ePartner Icon for Citrix</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_CTX_eRecord_TST</span>
      
      <span class="description">eRecord Test Enviroment Icon</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_CTX_eRecord_DEV</span>
      
      <span class="description">eRecord Dev Enviroment Icon</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_CTX_eRecord_POC</span>
      
      <span class="description">eRecord Poc Enviroment Icon</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_CTX_eRecord_SUP</span>
      
      <span class="description">eRecord Sup Enviroment Icon</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_CTX_eRecord_WAMB_PRD</span>
      
      <span class="description">Willow AMB Icon</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_CTX_eRecord_WAMB_PGR1</span>
      
      <span class="description">Willow AMB Playground Icon</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_CTX_eRecord_WAMB_TST</span>
      
      <span class="description">Willow AMB Test Icon</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_CTX_CPN_Designer</span>
      
      <span class="description">CPN Designer</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_CTX_SoftLabMic</span>
      
      <span class="description">SoftLabMic Access</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_CTXVDI_POOL1</span>
      
      <span class="description">Virtual Desktop Pool (Ticket need to go to SIG_SN to be added)</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_SCM_Citrix_Users</span>
      
      <span class="description">Allscripts Icon</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDU_CitrixAccessGateway</span>
      
      <span class="description">Access to Citrix application remote access portal</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_VPN_FullAccess</span>
      
      <span class="description">Access to Cisco AnyConnect</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDU_VPN_GP_FullAccess</span>
      
      <span class="description">Access to Global Protect</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>URMC_PACS_CLINICAL</span>
      <span class="description">5 Day access to Imaging application (Must fill out <a href="https://urmcprod.service-now.com/sp?id=sc_cat_item&sys_id=78999f871bd5511089d184c3604bcbd0" target="_blank">Imaging Access Form</a>)</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_PowerShare_Clerks</span>
      <span class="description">Grants Access to Powershare</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDL_PyxisUser_C</span>
      <span class="description">Give permission for Pyxis access (First time user need to have ticket sent to pyxis_sn)</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
    `
    <button onclick=copyToClipboard(this)>
      <span>ISDG_Imprivata_Users</span>
      <span class="description">Allows access to the Imprivata System (Takes up to an hour to take effect)</span>
      <br/>
      <sub>Click to Copy</sub>
    </button>
    `,
];

  // As letters are typed into the filter area filters groups based on what is typed
  if (filter.value != "") {
      var regex = new RegExp(filter.value.toLowerCase());
      for (let i = 0; i < adGroups.length; i++) {
          var reg = /\<(.*?)\>/g;
          var strip_html = adGroups[i].replace(reg, "");
          if (regex.test(strip_html.toLowerCase())) {
              build += adGroups[i];
          }
      }
  }
  // If filter is empty shows all groups
  else {
      build += adGroups.join("\n");
  }

  if (build === "") {
      build += `No result match \"${filter.value}\"`;
  }
  
  ad_groups.innerHTML = build;
}


// Copies based on buttons pressed
function copyToClipboard(button) {
  navigator.clipboard
      .writeText(button.children[0].innerHTML)
      .then(function () {
          button.children[button.children.length-1].innerHTML = "Copied";
      })
      .catch(function () {
          button.children[button.children.length-1].innerHTML = "Failed to Copy";
      });

  setTimeout(function () {
      button.children[button.children.length-1].innerHTML = "Click to Copy";
  }, 1000);
}
