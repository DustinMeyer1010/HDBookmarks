
// Updates the page when it is loaded clearing  search field
function loadPage() {
    filterSearch();
    const filter = document.getElementById("filter-search");
    filter.value = "";
    loadButton()
}

// Using the filter field to filter the links
function filterSearch() {
    let build = "";
    const filter = document.getElementById("filter-search");
    let links = document.getElementById("all-links");

    links.innerHTML = "";

    // All links shown on the page
    links_array = [
      `
      <a class="link" href="https://portal.vpn.urmc.rochester.edu" target="_blank" tabindex="0">
        <h1 class="title">Global Protect Install </h1>
        <img class="preview" src="Assests/GP.png" loading="lazy"/>
        <p class="description">Install link for GP when someone is remote</p>
      </a>
      `,
      `
      <a class="link" href="https://webvpn.urmc.rochester.edu" target="_blank" tabindex="0">
        <h1 class="title">Cisco AnyConnect Install</h1>
        <img class="preview" src="Assests/Cisco.png" loading="lazy"/>
        <p class="description">Install link for Cisco when someone is remote</p>
      </a>
      `,
      `
      <a class="link" href="https://urmcprod.service-now.com" target="_blank" tabindex="0"> 
        <h1 class="title">Internal ServiceNow</h1> 
        <img class="preview" src="Assests/Internal_SN.png" loading="eager"/> 
        <p class="description"></p> 
      </a>
      `,
        `    
    <a class="link" href="https://acute-reminder-436.notion.site/Knowledge-Vaults-619e147511424be38961c00734e0d540" target="_blank" tabindex="0">
      <h1 class="title">Knowledge Vault</h1>
      <img class="preview" src="Assests/Vault.png" loading="eager"/>
      <p class="description">Dustin's Notes</p>
    </a>
    `,
        `   
    <a class="link" href="https://urmcprod.service-now.com/sp" target="_blank" tabindex="0">
      <h1 class="title">ServiceNow Portal</h1>
      <img class="preview" src="Assests/Service_Portal.png" loading="eager"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://status.zoom.us/" target="_blank" tabindex="0">
      <h1 class="title">Official Zoom Status</h1>
      <img class="preview" src="Assests/Zoom_Status.png" loading="eager"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://portal.office.com/servicestatus" target="_blank" tabindex="0">
      <h1 class="title">Official Microsoft Status</h1>
      <img class="preview" src="Assests/Microsoft_Office_Status.png" loading="eager"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://downdetector.com/" target="_blank" tabindex="0">
      <h1 class="title">DownDetector</h1>
      <img class="preview" src="Assests/Down_Detector.png" loading="eager"/>
      <p class="description"></p>
    </a>
    `,
        `    
    <a class="link" href="https://apps.mc.rochester.edu/Sysstat/" target="_blank" tabindex="0">
      <h1 class="title">URMC System Status</h1>
      <img class="preview" src="Assests/URMC_System_Status.png" loading="eager"/>
      <p class="description"></p>
    </a>
    `,
        `    
    <a class="link" href="https://tech.rochester.edu/alerts/" target="_blank" tabindex="0">
      <h1 class="title">UIT Alerts</h1>
      <img class="preview" src="Assests/UIT_Alerts.png" loading="eager"/>
      <p class="description"></p>
    </a>
    `,
        `    
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0014551" target="_blank" tabindex="0">
      <h1 class="title">Desktop Triage</h1>
      <img class="preview" src="Assests/URMC_System_Status.png" loading="eager"/>
      <p class="description"></p>
    </a>
    `,
        `   
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0014551" target="_blank" tabindex="0">
      <h1 class="title">Desktop Triage</h1>
      <img class="preview" src="Assests/Desktop_Triage.png" loading="lazy"/>
      <p class="description">SNOW KB that provides insight as to where CTS tickets should go</p>
    </a>
    `,
        `
    <a class="link" href="https://apps.mc.rochester.edu/Staff2/ISD" target="_blank" tabindex="0">
      <h1 class="title">On-Call Schedules/Vacation Calendar</h1>
      <img class="preview" src="Assests/Staff_System.png" loading="lazy"/>
      <p class="description">Request time off</p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0011376" target="_blank" tabindex="0">
      <h1 class="title">Exec Management Triage Sheet</h1>
      <img class="preview" src="Assests/Executive_Management.png" loading="lazy"/>
      <p class="description">Lists which techs are responsible for which Exec</p>
    </a>
    `,
        `
    <a class="link" href="https://uofr.sharepoint.com/sites/ISDServiceDesk/SitePages/CollabHome.aspx" target="_blank" tabindex="0">
      <h1 class="title">Help Desk SharePoint</h1>
      <img class="preview" src="Assests/ISD_SharePoint.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0010422" target="_blank" tabindex="0">
      <h1 class="title">Major Incident Script/Level 1</h1>
      <img class="preview" src="Assests/L1A.png" loading="lazy"/>
      <p class="description">Instructions to create L1A</p>
    </a>
    `,
        `
    <a class="link" href="https://appdev.mc.rochester.edu/isd/UrlSupport/Home/" target="_blank" tabindex="0">
      <h1 class="title">SharePoint Owners</h1>
      <img class="preview" src="Assests/SharePoint_Owners.png" loading="lazy"/>
      <p class="description">Search Sharepoint URL to find owners</p>
    </a>
    `,
        `
    <a class="link" href="https://apps.mc.rochester.edu/ISD/SIG/PrintQueues/" target="_blank" tabindex="0">
      <h1 class="title">Print Queue Report</h1>
      <img class="preview" src="Assests/Print_Queue.png" loading="lazy"/>
      <p class="description">Full List of network printers</p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0015483" target="_blank" tabindex="0">
      <h1 class="title">Desktop Repair Matrix</h1>
      <img class="preview" src="Assests/Destop_Repiar_Matrix.png" loading="lazy"/>
      <p class="description">Shows which models of computers can be replaced</p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0014512" target="_blank">
      <h1 class="title">System Summary Index</h1>
      <img class="preview" src="Assests/System_Summary_Index.png" loading="lazy"/>
      <p class="description">Gardner's List of KBs</p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0014676" target="_blank" tabindex="0">
      <h1 class="title">Important Phone Numbers</h1>
      <img class="preview" src="Assests/Important_Numbers.png" loading="lazy"/>
      <p class="description"></p>
      <p hidden></p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0015713" target="_blank" tabindex="0">
      <h1 class="title">DOH Quick Sheet</h1>
      <img class="preview" src="Assests/NYS_DOH.png" loading="lazy"/>
      <p class="description">CLICK HERE FOR ALL Department of Health Calls</p>
      <p hidden>Audit</p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0010262" target="_blank" tabindex="0">
      <h1 class="title">Mac Password KB</h1>
      <img class="preview" src="Assests/MAC_Password.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0015613" target="_blank" tabindex="0">
      <h1 class="title">Clear disk space\User Profiles</h1>
      <img class="preview" src="Assests/Remove_Old_Profile.png" loading="lazy"/>
      <p class="description">SNOW KB for clearing disk space properly</p>
    </a>
    `,
        `
    <a class="link" href="https://tech.rochester.edu/wp-content/uploads/8_12_24_32_Quick_Reference_Guide.pdf" target="_blank" tabindex="0">
      <h1 class="title">NEC Desk Phone Guide</h1>
      <img class="preview" src="Assests/NEC_PDF.png" loading="lazy"/>
      <p class="description">Helpful PDF guide to onsite deskphones</p>
    </a>
    `,
        `
    <a class="link" href="file:\\NTSDRIVE05\Cust_Serv\Help Desk Info\Help Desk PC Setup Docs\Home Grown Tools\Bookmarks\Assests\Copy of eRecord Key Words Guide.xlsm" target="_blank" tabindex="0">
      <h1 class="title">Excel file to associate terms with eRecord teams</h1>
      <img class="preview" src="Assests/Keyword_Guide_eRecord.png" loading="lazy"/>
      <p class="description">Download of the keywords guide</p>
    </a>
    `,
        `
    <a class="link" href="http://sharepoint.mc.rochester.edu/sites/eRecLibrary/Docs/Misc/erecord-clinical-leaders-list.pdf" target="_blank" tabindex="0">
      <h1 class="title">IP</h1>
      <img class="preview" src="Assests/In_Patient.png" loading="lazy"/>
      <p class="description">eRecord Super Users</p>
    </a>
    `,
        `
    <a class="link" href="http://sharepoint.mc.rochester.edu/sites/eRecLibrary/Docs/Misc/ambulatory-lead-smes.xlsx" target="_blank" tabindex="0">
      <h1 class="title">AMB</h1>
      <img class="preview" src="Assests/AMB_Excel.png" loading="lazy"/>
      <p class="description">eRecord Super Users download</p>
    </a>
    `,
        `
    <a class="link" href="file://NTSDRIVE05/ISD_share/Cust_Serv/Help Desk Info/Training Daily Completions" target="_blank" tabindex="0">
      <h1 class="title">Old LMS</h1>
      <img class="preview" src="Assests/Old_lms.png" loading="lazy"/>
      <p class="description">Excel file containing all LMS prior 2024</p>
    </a>
    `,
        `
    <a class="link" href="https://urmc.sumtotal.host/" target="_blank" tabindex="0">
      <h1 class="title">eRecord Training (Sumtotal)</h1>
      <img class="preview" src="Assests/LMS_page.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0014549" target="_blank" tabindex="0">
      <h1 class="title">Chart Correction Guide</h1>
      <img class="preview" src="Assests/eRecord_Corrections.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0015320" target="_blank" tabindex="0">
      <h1 class="title">Gardner's Guide to eRecord</h1>
      <img class="preview" src="Assests/Common_eRecord_Issues.png" loading="lazy"/>
      <p class="description">Common eRecord issues</p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0010766" target="_blank">
      <h1 class="title">Name Change Script</h1>
      <img class="preview" src="Assests/Name_Change_Script.png" loading="lazy"/>
      <p class="description">SNOW KB for Name changes</p>
    </a>
    `,
        `
    <a class="link" href="https://myidentity.rochester.edu/itim/console/jsp/logon/Login.jsp" target="_blank" tabindex="0">
      <h1 class="title">MyIdentity PROD</h1>
      <img class="preview" src="Assests/myIdentity_Prod.png" loading="lazy"/>
      <p class="description">This links to PROD1 ITIM Console for password changes</p>
    </a>
    `,
        ` 
    <a class="link" href="https://myidentity.rochester.edu/identity/admin/LoginResults.jsp" target="_blank" tabindex="0">
      <h1 class="title">MyIdentity Admin</h1>
      <img class="preview" src="Assests/myIdentity_Admin.png" loading="lazy"/>
      <p class="description">Allows search via URID, NETID, SSN, DOB, and Name</p>
    </a>
    `,
        `
    <a class="link" href="https://myidentity.rochester.edu/cast/" target="_blank" tabindex="0">
      <h1 class="title">Compromised Accounts</h1>
      <img class="preview" src="Assests/Compromised_Account.png" loading="lazy"/>
      <p class="description">Check status of someones account</p>
    </a>
    `,
        `
    <a class="link" href="https://extranet.urmc.rochester.edu/ChangePass/" target="_blank" tabindex="0">
      <h1 class="title">Extranet Password Reset</h1>
      <img class="preview" src="Assests/URMC_Password_Change.png" loading="lazy"/>
      <p class="description">Use Citrix if Remote</p>
    </a>
    `,
        `
    <a class="link" href="https://confluence.rochester.edu/display/UNIVITIDM/IdM+Account+Grid+For+ISD+Help+Desk" target="_blank" tabindex="0">
      <h1 class="title">AD Account Grid</h1>
      <img class="preview" src="Assests/Account_Grid.png" loading="lazy"/>
      <p class="description">Master guide to URMC Accounts</p>
    </a>
    `,
        `
    <a class="link" href="https://confluence.rochester.edu/display/UNIVITIDM/Guest+Account+System+Help+Desk+Support+Documentation+Main+Page" target="_blank" tabindex="0">
      <h1 class="title">Guest Account Documentation</h1>
      <img class="preview" src="Assests/Guest_Account_System.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://www.rochester.edu/it/security/duo/helpdesk/?domain=urmc" target="_blank" tabindex="0">
      <h1 class="title">Duo Admin</h1>
      <img class="preview" src="Assests/DUO.png" loading="lazy"/>
      <p class="description">Manage DUO accounts</p>
    </a>
    `,
        `
    <a class="link" href="https://myidentity.rochester.edu/guest/" target="_blank" tabindex="0">
      <h1 class="title">Guest Account System</h1>
      <img class="preview" src="Assests/Create_Guest_Account_System.png" loading="lazy"/>
      <p class="description">Create sponsored accounts</p>
    </a>
    `,
        `
    <a class="link" href="https://www.rochester.edu/it/security/duo/enrollment/index.php?domain=urmc-sh" target="_blank" tabindex="0">
      <h1 class="title">DUO Enrollment Portal</h1>
      <img class="preview" src="Assests/DUO_Enrollment.png" loading="lazy"/>
      <p class="description">Customer Facing DUO Management *MUST BE ONSITE*</p>
    </a>
    `,
        `
    <a class="link" href="https://director.urmc-sh.rochester.edu" target="_blank" tabindex="0">
      <h1 class="title">Director\Citrix Remote Viewer</h1>
      <img class="preview" src="Assests/Director.png" loading="lazy"/>
      <p class="description">Allows shadowing of any Citrix instance</p>
    </a>
    `,
        `
    <a class="link" href="file://NTSDRIVE05/ISD_Share/Cust_Serv/Help Desk Info/Tools/Tools" target="_blank" tabindex="0">
      <h1 class="title">Exe Tools for HD</h1>
      <img class="preview" src="Assests/HD_Tools.png" loading="lazy"/>
      <p class="description">Multiple tools for use for the HelpDesk</p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0010842" target="_blank" tabindex="0">
      <h1 class="title">BitLocker Script</h1>
      <img class="preview" src="Assests/BitLocker.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://mbamsql.urmc-sh.rochester.edu/Reports/" target="_blank" tabindex="0">
      <h1 class="title">BitLocker Console</h1>
      <img class="preview" src="Assests/BitLocker_Console.png" loading="lazy"/>
      <p class="description">NEED FIRST 8 CHAR OF KEY ID</p>
    </a>
    `,
        `
    <a class="link" href="file://nt014/AdminApps/Utils/AD Utilities" target="_blank" tabindex="0">
      <h1 class="title">HDAMU & DMD</h1>
      <img class="preview" src="Assests/AD_Utils.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="file://ntsdrive05/isd_share/Cust_Serv/Help Desk Info/Tools/HDBookmarks_2.0/Common AD Groups.HTML" target="_blank" tabindex="0">
      <h1 class="title">Common AD Groups</h1>
      <img class="preview" src="Assests/Common_Ad_Groups.png" loading="lazy"/>
      <p class="description">Compiled list of common AD Groups that HD grants</p>
    </a>
    `,
        `
    <a class="link" href="https://rochester.app.box.com/master/users" target="_blank" tabindex="0">
      <h1 class="title">Box Admin</h1>
      <img class="preview" src="Assests/Box_Admin.png" loading="lazy"/>
      <p class="description">Manage Box Accounts</p>
    </a>
    `,
        `
    <a class="link" href="https://jss.urmc.rochester.edu:8443" target="_blank" tabindex="0">
      <h1 class="title">JAMF PRO</h1>
      <img class="preview" src="Assests/Jamf.png" loading="lazy"/>
      <p class="description">Mobile Device Management (MDM) Console</p>
    </a>
    `,
        `
    <a class="link" href="file://ntsdrive05/isd_share/Cust_Serv/Help Desk Info/Help Desk PC Setup Docs/Home Grown Tools" target="_blank" tabindex="0">
      <h1 class="title">Joseph Patrick's HelpDesk Tool</h1>
      <img class="preview" src="Assests/HelpDeskTool.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://onbasedms.urmc-sh.rochester.edu/AppNetNT/Login.aspx" target="_blank" tabindex="0">
      <h1 class="title">Onbase Admin Console</h1>
      <img class="preview" src="Assests/OnBase_Console.png" loading="lazy"/>
      <p class="description">Allows HD to unlock Onbase Acc</p>
    </a>
    `,
        `
    <a class="link" href="rearrangev2.html" tabindex="0">
      <h1 class="title">RearrangeV2</h1>
      <img class="preview" src="Assests/AD_Assistant.png" loading="lazy"/>
      <p class="description">Changes list of names from first last to Last, first for Active Directory</p>
    </a>
    `,
        `
    <a class="link" href="http://its-pharos-wp01.ur.rochester.edu/uniprint/packages.asp" target="_blank" tabindex="0">
      <h1 class="title">Pharos</h1>
      <img class="preview" src="Assests/Pharos.png" loading="lazy"/>
      <p class="description">These are special downloaded printers</p>
    </a>
    `,
        `
    <a class="link" href="https://rochester.account.box.com/login" target="_blank" tabindex="0">
      <h1 class="title">Drop Box</h1>
      <img class="preview" src="Assests/Box.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://onedrive.live.com/login/" target="_blank" tabindex="0">
      <h1 class="title">Microsoft OneDrive Login</h1>
      <img class="preview" src="Assests/Onedrive.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="http://sites.mc.rochester.edu/information-systems/get-help/file-storage-policy-and-quotas/" target="_blank" tabindex="0">
      <h1 class="title">312 Rec Form</h1>
      <img class="preview" src="Assests/312Form.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/sp?id=sc_cat_item&sys_id=78999f871bd5511089d184c3604bcbd0" target="_blank" tabindex="0">
      <h1 class="title">Request Imaging Access</h1>
      <img class="preview" src="Assests/Imaging_Request.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://webmso.urmc-sh.rochester.edu/privinq/msopi.aspx#Scroll" target="_blank" tabindex="0">
      <h1 class="title">WebMSO</h1>
      <img class="preview" src="Assests/WebMSO.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://tech.rochester.edu/services/it-equipment-recovery-program/" target="_blank" tabindex="0">
      <h1 class="title">Tech Recycling</h1>
      <img class="preview" src="Assests/Recycle_Program.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/sp?id=sc_cat_item&sys_id=38d2347adb6b1380646c27360596195b" target="_blank" tabindex="0">
      <h1 class="title">Shared Drive Request</h1>
      <img class="preview" src="Assests/Share_Drive.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/sp?id=sc_cat_item&sys_id=e9d8d648dbbf9300eff5eda5ca961907&sysparm_category=7235974c1b6fb810ca3acae5604bcb7e&catalog_id=-1" target="_blank" tabindex="0">
      <h1 class="title">DL and Email Request</h1>
      <img class="preview" src="Assests/DL.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/sp?id=sc_cat_item&sys_id=728479151b8989109fefc804604bcb08&sysparm_category=f79284901ba3f810ca3acae5604bcb71" target="_blank" tabindex="0">
      <h1 class="title">Access Another Users Information</h1>
      <img class="preview" src="Assests/Data_Access.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/sp?id=sc_cat_item&sys_id=884739521b618d10ca3acae5604bcb27&sysparm_category=f79284901ba3f810ca3acae5604bcb71" target="_blank" tabindex="0">
      <h1 class="title">Critical Termination</h1>
      <img class="preview" src="Assests/Crit_Term.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://licensing.adobe.com/sap/bc/bsp/sap/zavllogin/login.htm" target="_blank" tabindex="0">
      <h1 class="title">Adobe Pro Licenses</h1>
      <img class="preview" src="Assests/Adobe.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://online.wfhealthcarepatientpay.com/providers/Form/Account/Login" target="_blank" tabindex="0">
      <h1 class="title">URSecure Pay\WellsFargo</h1>
      <img class="preview" src="Assests/Wells.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://rochester.app.box.com/s/mzhsfsxpwvjhb4tl7i2a8tjsh1rqwdkn" target="_blank" tabindex="0">
      <h1 class="title">GNAV 10.3</h1>
      <img class="preview" src="Assests/GNAVOLD.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://go.microsoft.com/fwlink/p/?LinkID=2187327&clcid=0x409&culture=en-us&country=US" target="_blank" tabindex="0">
      <h1 class="title">Official Teams Install</h1>
      <img class="preview" src="Assests/Teams_Download.png" loading="lazy"/>
      <p class="description"></p>
    </a>
    `,
        `
    <a class="link" href="https://urmcprod.service-now.com/kb_view.do?sysparm_article=KB0013535" target="_blank" tabindex="0">
      <h1 class="title">Haiku</h1>
      <img class="preview" src="Assests/Haiku.png" loading="lazy"/>
      <p class="description">Server = ercd-sproxy.urmc.rochester.edu<br/>Path = soapproxies-haiku</p>
    </a>
    `,
    `
    <a class="link" href="https://myidentity.rochester.edu/urmctemplateviewer/templates.jsp" target="_blank" tabindex="0">
      <h1 class="title">MyIdentity Template Viewer</h1>
      <img class="preview" src="Assests/TemplateViewer.png" loading="lazy"/>
    </a>
    `,
    `
    <a class="link" href="https://www.rochester.edu/human-resources/myurhr/" target="_blank" tabindex="0">
      <h1 class="title">MyURHR & Workday</h1>
      <img class="preview" src="Assests/myURHR.png" loading="lazy"/>
    </a>
    `
    ];

    // As letters are typed into the filter area filters links based on what is typed
    if (filter.value != "") {
        var regex = new RegExp(filter.value.toLowerCase());
        for (let i = 0; i < links_array.length; i++) {
            var reg = /\<(.*?)\>/g;
            var strip_html = links_array[i].replace(reg, "");
            if (regex.test(strip_html.toLowerCase())) {
                build += links_array[i];
            }
        }
    }
    // If filter is empty shows all links
    else {
        build += links_array.join("\n");
    }

    if (build === "") {
        build += `No result match \"${filter.value}\"`;
    }
    links.innerHTML = build;



    /*
    Add hats to the links for chrismas update
    for (let i = 0; i < links.children.length; i++){
      var santaHat = document.createElement("img");
      santaHat.setAttribute("src", "Assests/Chrismas_Hat.png")
      santaHat.classList.add("Chrismas-Hat")
      links.children[i].appendChild(santaHat)
    }
    */
    document.documentElement.scrollTop = 0;
}

// Items that would copy to clipboard
const copyLink = {
    "Haiku Server and Path": "Server = ercd-sproxy.urmc.rochester.edu Path = soapproxies-haiku",
    "Dimensions Tenant URL": "https://univofrochester.prd.mykronos.com",
    "SCCM Computer Name": "SYSMGMTADMIN",
    "Pager Number": "+15852209506",
    "PACS Access URL": "https://urmcprod.service-now.com/sp?id=sc_cat_item&sys_id=78999f871bd5511089d184c3604bcbd0",
    "eRecord Training Request URL": "https://urmcprod.service-now.com/sp?id=sc_cat_item&table=sc_cat_item&sys_id=cb6380f6db42f340646c273605961941&searchTerm=Training", 
};

// Copies based on buttons pressed
function copyToClipboard(button) {
    navigator.clipboard
        .writeText(copyLink[button.children[0].innerHTML])
        .then(function () {
            button.children[2].innerHTML = "Copied";
        })
        .catch(function () {
            button.children[2].innerHTML = "Failed to Copy";
        });

    setTimeout(function () {
        button.children[2].innerHTML = "Click to Copy";
    }, 1000);
}

// When pressing enter on the input field it will bring you to first link shown
function goToFirstLink(event) {
    event.preventDefault();
    let links = document.getElementById("all-links");

    if (links.children.length == 0) {
        return;
    }

    links.children[0].click();
    const filter = document.getElementById("filter-search");
    filter.value = "";
    filterSearch();
}
