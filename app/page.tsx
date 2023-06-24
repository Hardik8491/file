import Image from "next/image";
import img from '../public/210130111013 (1).jpg'
import MenuBar from "@/Components/MenuBar";
import HomePage from "@/Components/Home";
import About from "@/Components/About";
import Service from "@/Components/Service";
import Education from "@/Components/Education";
import Details from "@/Components/Details";
import AmzingWork from "@/Components/AmzingWork";
import Footer from "@/Components/Footer";
import Contect from "@/Components/Contect";
import NewPost from "@/Components/NewPost";
import Work from "@/Components/Work";

export default function Home() {
  return (
    <main className="bg-white h-screen ">
      <HomePage/>
      <About/>
      <Service/>
      <Education/>
      <AmzingWork/>
      {/* <NewPost/> */}
      <Work/>
      <Contect/>
      <Footer/>

    
      {/* <section
        className="featuredAreaWrap md:text-left text-center bg-dark z-[1] flex items-center bgGrident1
       bg-blend-hard-light relative min-h-screen xl:rounded-br-[20rem] lg:rounded-br-[18rem] md:rounded-br-[15rem] 
          sm:rounded-br-[10rem] rounded-br-0 w-screen md:py-[6.25rem] py-20">
        <div className="shaps absolute inset-0">
          <img
            className="absolute floatAnim left-[10%] top-[10%] animDelay1"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAA0CAYAAADmI0o+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmV
          Tek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvd
          XQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MUE3QTZCODQzNkRFQzExQUU1QzhBQUQyNEFDMTY4
          MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RTk2MjM5MjQ3MUYxMUVEQTY3OEE3NTZCMjRFQkFERCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RTk2MjM5MTQ3MUYxMUVEQTY3OEE3NTZCMjRFQkFERCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo
          3YjEyMjRlZC0yNTAyLWZmNDEtOTcwYi02NmVkODE2NzU1NmYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzFBN0E2Qjg0MzZERUMxMUFFNUM4QUFEMjRBQzE2ODMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5HakTIAAAD0UlEQVR42syZW0gUURjHj0O66w28YK1u3l5UrO1iipaRDxveyiIog0rWknoJIkgoLR/yFoHQkx
          VRml2pt9SKAoMCa8Oy0hIvD63Zekm8wK6267XvW8/EtOyl0d2d84c/jruz8/9x5sz3nZnxWlxcJMtQBDgBHAteDQ4Gy+h3ZvAE+Bf4O7gbPCg2wEsEmC84HZwGVojMGQZrwa3g364C48A7wLlgP7IyTYOfgd+AF1YCFgY+Bo4krtUAuA48uhyw9eBCsJy4RzgX68FfxYClgAvoaXSn8HTeBbfZmj/WUnkIis8voJkOwdaANR6CEjJoaLZNMH4HOfG85NYDIgTDkhBFpBNmZ1iDYdXOIdIrm+8gPBhWdH8GwJBh
          uwVM7heOf7cRdrQVmTjT9JByGb3PnVIg0yrYiBf7y5aW16FNzS/WfvrcqdDrB4PGxycCzOYZH8tklfnMhIQEG5XKiMnNm1TDebuzfqrVGWMiI+Kx8mMvTHK259jYuHdFZc26J43PE4eGhoPFpISHKyb27snpKrtQ/C00NGT2P37SjmAlsKG029DMM1zp+QrV7YYHyVNT0yuqcf7+fqZCzaEP1VVlnTCyjlYXegS7bO+K1GrbgjRHT2b29w+EuXISRUdHjjbU175MS0uZtLPLFGev0l+7XheTnXsg39VQKDxmVs7+f
          Myw1wls9sTqS1fizhSX5ZhMZm93XXowRbwxA7Li7TVQk/CD2qs3YyuranYuLCy4vZFjBmSpMdPqK9M/k7+19X3QrryD+e4cKZvnTS6bfdr06HF6eio/5/Q4KiP81Vd0/FSmp6EswwOZmI0M9KMRjt5iESwJOt2PMCKRMLuktJxfMOoQrBeLJ9YpqXtRw52HycgCmz3YxPXnSsujVlo8XSFkOFtyMQqZvGS+ChIYGKAzGIzRLHRwYOkHlhgE2wD/fyFsaSPOMTVhT2qOPotgTWkcfWrDmhI4R0seCaVEsEAGwQI5wqgQzMA
          glwHB9AyCWVYX3QyCdSPYOwbBtAj2ikGwFgTrAHcxBIUsHXy5uMUQmIXFsuwBBeCqERwqMRQ+SsBbOiM/YkZwBQOjVUlZ/o4YCh+w4NuLLRJBfaQrnTm+8vPCDw5L1AkMNHtO2JKE6gEfAc97EGqeZvZY90prNZKlJ8hzHoDCjEKaSZyBoe6D97n5tBppxj17qwt7aqYXQrsboPCYSTSDiAVD9YFTwadpjXFFnTpNj9nnaEdhuXAmLMInwEXgxGW0GazoN/g65UxiwIRS0ds+fAwfR5beZwYI5g6+j+wFv8WGDO4UG/BHgAEA3XA1W6Ej34kAAAAASUVORK5CYII="
            alt="Shape"
          />
          <img
            className="absolute floatAnim right-[10%] bottom-[20%] animDelay2"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8 +IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wd
        Gs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC
        9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MUE3QTZCODQzNkRFQzExQUU1QzhBQUQyNEFDMTY4MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNEUwRkJBOTQ3MUYxMUVEQjZFQ0
        U4Nzg3MUE0MkY1NSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNEUwRkJBODQ3MUYxMUVEQjZFQ0U4Nzg3MUE0MkY1NSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YjEyMjRlZC0yNTAyLWZmNDEtOTcwYi02NmVkODE2NzU1NmYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzF
        BN0E2Qjg0MzZERUMxMUFFNUM4QUFEMjRBQzE2ODMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5aMM2AAAAB9klEQVR42syYPUhCURTHr8836pKjBC6lCBnYkLQ6FkJDUw6RYENBQWtNtQYFtQRCg82BtNrYx5CDgWgtQjg66ajQ/8B58Qjtffj0nT/8Fn3e8wPvu/eeG0isd5SLLIEsWAOLYB6E+bse+Aaf4BlUwYfTArqDZ0OgCAog+c9zc8wy2OLPGqAEbkHfTjHNpvwhaIMLC6lxSfJv2zyWPqkY/U1v4BJE1OSJ8Fg05oJbsQ3wDtLK+9CYNa7hSCwPHnheTSshrpG3K5YDdw5fDLfRuVbOSiwOyiCoZpcg14yPEyP7e9N6NMuEubY+SmwfrCj/QrUP/orRRDxV/ufEeOEMsaJH65QX69yeWayg5GTXEEu53GamFXJJaXxKkJYsiWUEimVILCFQLEFiUYFiUc2nld5yJ9CU0Gh8RpeWHol1BIp1SKwpUKxJYi8CxV5J7EmgWJXE6tz3SQm51I3loiRIrGQ+9lCH3BUg1WWXXzFq288EiJ0bVwjmlf+GG1y/QrWvRzUjA7Dt007Q49qDcX1lizvj4QylhlyzZdWJV8CO2X6KGXCtit27C+qMN5XNuyyX6XONspNLFcojN6G1KUjRmGmuoZyKUei6chUcebTOdXksGvPL6jxmZx5cgRg4drl9Nfi3MR7Lcv4GPLwcDpnmzsSXwz8CDAAqh1+l/BR6tgAAAABJRU5ErkJggg=="
            alt="Shape"
          />

          <img
            className="absolute floatAnim right-[50%] bottom-[50%] animDelay3"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHR
          Tb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4O
          nhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREY
          geG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS
          5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtc
          E1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MUE3QTZCODQzNkRFQzExQUU1QzhBQUQyNEFDMTY4MyIgeG1wTU06
          RG9jdW1lbnRJRD0ieG1wLmRpZDpCNEUwRkJBOTQ3MUYxMUVEQjZFQ0U4Nz
          g3MUE0MkY1NSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNEUwRkJBODQ3MUYxMUVEQjZFQ0U4Nzg3MUE0MkY1NSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPi
          A8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YjEyMjRlZC0yNTAyLWZmNDEtOTcwYi02NmVkODE2NzU1NmYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzFBN0E2Qjg0MzZERUM
          xMUFFNUM4QUFEMjRBQzE2ODMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5aMM2AAAAB9klEQVR42syYPUhCURTHr8836pKjBC6lCBnYkLQ6FkJD
          Uw6RYENBQWtNtQYFtQRCg82BtNrYx5CDgWgtQjg66ajQ/8B58Qjtffj0nT/8Fn3e8wPvu/eeG0isd5SLLIEsWAOLYB6E+bse+Aaf4BlUwYfTArqDZ0OgCAog+c9zc8wy2OLPGqAEbkHfTjHNpvwhaIMLC6lxSfJv2zyWPq
          kY/U1v4BJE1OSJ8Fg05oJbsQ3wDtLK+9CYNa7hSCwPHnheTSshrpG3K5YDdw5fDLfRuVbOSiwOyiCoZpcg14yPEyP7e9N6NMuEubY+SmwfrCj/QrUP/orRRDxV/ufEeOEMsaJH65QX69yeWayg5GTXEEu53GamFXJJaXxKk
          JYsiWUEimVILCFQLEFiUYFiUc2nld5yJ9CU0Gh8RpeWHol1BIp1SKwpUKxJYi8CxV5J7EmgWJXE6tz3SQm51I3loiRIrGQ+9lCH3BUg1WWXXzFq288EiJ0bVwjmlf+GG1y/QrWvRzUjA7Dt007Q49qDcX1lizvj4Qylhlyz
          ZdWJV8CO2X6KGXCtit27C+qMN5XNuyyX6XONspNLFcojN6G1KUjRmGmuoZyKUei6chUcebTOdXksGvPL6jxmZx5cgRg4drl9Nfi3MR7Lcv4GPLwcDpnmzsSXwz8CDAAqh1+l/BR6tgAAAABJRU5ErkJggg=="
            alt="Shape"
          />

          <img
            className="absolute floatAnim right-[15%] bottom-[40%] animDelay4"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAYAAAB9sggoAAAAGXRFW
            HRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3L
            nczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MUE3QTZCODQz
            NkRFQzExQUU1QzhBQUQyNEFDMTY4MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOTkwNzcyOTQ3MUYxMUVEODc0NDkwOTQzNzQ4RDE0MiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOTkwNzcyODQ3MUYxMUVEODc0NDkwOTQzNzQ4RDE0MiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YjEyMjRlZC0yNTAyLWZm
            NDEtOTcwYi02NmVkODE2NzU1NmYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzFBN0E2Qjg0MzZERUMxMUFFNUM4QUFEMjRBQzE2
            ODMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4c6xziAAADtklE
            QVR42syYXUhTYRjHz046nVgjP9pEsyAs8wv6EGY3YZIU6LoQwlDIMuZFUtlFH6J1kVhXEVRQo0AhsbqJ1D6QTLpJwVTwK0uDMs2NqbEM
            P6Zt/R99F6c556Y723ngD8dzds7/5/O+53nO+8qCFGpuFZEMZUD7oO3QZmg9uzYJfYc+Q++hJqjbUwOZB2ChkA4qhBI89OmDHkJ66Le3w
            AKg01A5FM6tLcaha9BdaH4tYHHQY2g3593ogHKhgeV+wLu4OQtqFwGKY8/sYB4egeVBzwQTWowIZR757oJpoWo2t8QO8qhini7n2A6oTe
            RMOQsqManQJ2cZI/oaP0BxzLNGOEpCMCoJezj/BXkXOw4lTcSvXqhTaw2qc1upCNszppMAFMcYioRDWchJJ07awVJW0fvEDGJJ4dlXgtQig8A0
            EgTTEFi8BMHiCSxagmDRvJ8q/YqdgOckGjxroFKLSQIbkSDYCIH1SxCsn1erVd1So1KpNvXwBcdzv0gN7ETBsUGZzWbTxsQm6cfGxlVSgIqICD
            cOD/XoaI6FZWamt0klW4wljDJWbDAYlTsTNaXT0zMh/oRSKIKnPva2VmLemyljchxYcnK0b/ydLTA0EQsxUcbO42AdssUnJKUVj44aYvwBFRWl
            Hu7rabmDrFnx5x/KmIWl0Xr/3s1auTxw1tdQ5EneDIrCwgt3XzIPppsuXSyplclkVl9BkRd5krfg9MJiZEL4w9LLJX1nzxQ94XledDjygNdT8nS4NOG0V964frXzSvmFajGHFc+2kAe8Opxc/kGTPxIHBc5ubmp6F3FKdy4PL0S0lyf6yAP9rZqMjP1jy/ykig8OiTKxhebSFQFuxJtyOz//aB3VGG/UKXoWPdMF1DgxLazEZ6ZG9+JEuquHogjLS8sqNI2Nzameti9qM1TRKyvKWlmdchXNAPtgB5Oz1bjCHaPnda/U9Q2v47q7ercYjKZIs9msnJubD6JrgYEBs0ql0qxWRZqSUxK/ZWcdGjiiPWxw83+YhvQAs/zbhgIcbWoc8HPxfwuo9oUygskv/Mym3T1/fWUYoUeQ1XEbik402DuBj8PCvK3CLP1X2KAXkM2HUDbmOeG4SnKMQeilkF7EsDKvwSWtSjDHHGMbt7jdLRd5+Jx+2rsCo9gIZYvwQtBEr4d+LtvcVwCzD/cuKM3dOrdCnWqBOleaKu6A/eu73OImH8nTbVFqeV1Mbr31noAJgxp/LNspouHeQEWfXZuDfrFhoi+XIcjkqcFfAQYApbYpHqfHx2oAAAAASUVORK5CYII="
            alt="Shape"
          />

          <img
            className="absolute floatAnim right-[10%] top-[10%] animDelay5"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAYAAAB9sggoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MUE3QTZCODQzNkRFQzExQUU1QzhBQUQyNEFDMTY4MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOTkwNzcyOTQ3MUYxMUVEODc0NDkwOTQzNzQ4RDE0MiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOTkwNzcyODQ3MUYxMUVEODc0NDkwOTQzNzQ4RDE0MiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YjEyMjRlZC0yNTAyLWZmNDEtOTcwYi02NmVkODE2NzU1NmYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzFBN0E2Qjg0MzZERUMxMUFFNUM4QUFEMjRBQzE2ODMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4c6xziAAADtklEQVR42syYXUhTYRjHz046nVgjP9pEsyAs8wv6EGY3YZIU6LoQwlDIMuZFUtlFH6J1kVhXEVRQo0AhsbqJ1D6QTLpJwVTwK0uDMs2NqbEMP6Zt/R99F6c556Y723ngD8dzds7/5/O+53nO+8qCFGpuFZEMZUD7oO3QZmg9uzYJfYc+Q++hJqjbUwOZB2ChkA4qhBI89OmDHkJ66Le3wAKg01A5FM6tLcaha9BdaH4tYHHQY2g3593ogHKhgeV+wLu4OQtqFwGKY8/sYB4egeVBzwQTWowIZR757oJpoWo2t8QO8qhini7n2A6oTeRMOQsqManQJ2cZI/oaP0BxzLNGOEpCMCoJezj/BXkXOw4lTcSvXqhTaw2qc1upCNszppMAFMcYioRDWchJJ07awVJW0fvEDGJJ4dlXgtQig8A0EgTTEFi8BMHiCSxagmDRvJ8q/YqdgOckGjxroFKLSQIbkSDYCIH1SxCsn1erVd1So1KpNvXwBcdzv0gN7ETBsUGZzWbTxsQm6cfGxlVSgIqICDcOD/XoaI6FZWamt0klW4wljDJWbDAYlTsTNaXT0zMh/oRSKIKnPva2VmLemyljchxYcnK0b/ydLTA0EQsxUcbO42AdssUnJKUVj44aYvwBFRWlHu7rabmDrFnx5x/KmIWl0Xr/3s1auTxw1tdQ5EneDIrCwgt3XzIPppsuXSyplclkVl9BkRd5krfg9MJiZEL4w9LLJX1nzxQ94XledDjygNdT8nS4NOG0V964frXzSvmFajGHFc+2kAe8Opxc/kGTPxIHBc5ubmp6F3FKdy4PL0S0lyf6yAP9rZqMjP1jy/ykig8OiTKxhebSFQFuxJtyOz//aB3VGG/UKXoWPdMF1DgxLazEZ6ZG9+JEuquHogjLS8sqNI2Nzameti9qM1TRKyvKWlmdchXNAPtgB5Oz1bjCHaPnda/U9Q2v47q7ercYjKZIs9msnJubD6JrgYEBs0ql0qxWRZqSUxK/ZWcdGjiiPWxw83+YhvQAs/zbhgIcbWoc8HPxfwuo9oUygskv/Mym3T1/fWUYoUeQ1XEbik402DuBj8PCvK3CLP1X2KAXkM2HUDbmOeG4SnKMQeilkF7EsDKvwSWtSjDHHGMbt7jdLRd5+Jx+2rsCo9gIZYvwQtBEr4d+LtvcVwCzD/cuKM3dOrdCnWqBOleaKu6A/eu73OImH8nTbVFqeV1Mbr31noAJgxp/LNspouHeQEWfXZuDfrFhoi+XIcjkqcFfAQYApbYpHqfHx2oAAAAASUVORK5CYII="
            alt="Shape"
          />

          <img
            className="absolute floatAnim right-[45%] top-[10%] animDelay6"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MUE3QTZCODQzNkRFQzExQUU1QzhBQUQyNEFDMTY4MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQjBFNUEyODQ3MUYxMUVEOENGNUZCMjIxNTBBN0QzOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQjBFNUEyNzQ3MUYxMUVEOENGNUZCMjIxNTBBN0QzOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YjEyMjRlZC0yNTAyLWZmNDEtOTcwYi02NmVkODE2NzU1NmYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzFBN0E2Qjg0MzZERUMxMUFFNUM4QUFEMjRBQzE2ODMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6VTkFAAAABiUlEQVR42tSYsUrDUBSGb0JwipNjEVzUoqiDCOpoV/EF7NxFQfAV9DU69jHqqAXJIBJpnQTpVhfbRU25/gdOIK1L0rTJ7w8fpL1tzsdNe3NzHGutmSE7oAaOwQZYBcs6NgTv4BXcgzZ4zlxBxFLig2sQ2uwJ9bt+2nppPuSBKzCw+TPQc3l5xdZBYOefQM89k9gp+LSLy1BrZBI7Bz928ZEa9bRiZyCyxSXSmhMeztRysQkeE3/9oiJLzAHoxW+4iUEPtEqQMlqzpQ5/xC7AvikvUvsyfhFfSh+8gRVTbj7AGhjFM9YgkDLq0EjOWAi2DEdewLaI7eLgyXBlTy7lieFLTcSOCMUORaxKKFYVsQqhWEV+/F84WCIT+3YNaVy9gbJlKGJ9QrG+iHUJxboi9kAo1hGxO0KxNu1NPF4umkSz1fwXG8URuCGYrVt1mXhKkgeBTon7/kB2FSCaFqN9fDM6UAfjAqXGWrOXpg1F2SKgbqpQt6GoG3eltTqdOTaH/cRinbs5/CvAAAJ+K1YRITDuAAAAAElFTkSuQmCC"
            alt="Shape"
          />
        </div>
        <span className="bg-accent absolute left-0 bottom-[-.75rem] h-6 w-1/2"></span>

        <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">

          <div className="featuredAreaInner relative z-[1] w-full">
            <div className="grid gap-[1.875rem] md:grid-cols-2 grid-cols-1 items-center">
              <div className="md:order-1">
                <div className="featuredImgWrap text-center w-full">
                  <div className="featuredImgInner relative inline-block w-4/5 sm:w-full md:w-full lg:w-[26rem] xl:w-[35rem]">
                    <span
                      className="h-[8rem] w-[8rem] sm:h-[14rem] sm:w-[14rem] md:h-[10rem] md:w-[10rem] lg:h-[14rem] lg:w-[14rem] xl:h-[18.75rem] xl:w-[18.75rem] absolute bg-white rounded-full right-[-2.5rem] top-[-2.5rem] md:right-[-3.5rem] md:top-[-3.5rem] lg:right-[-4rem] lg:top-[-4rem] xl:right-[-6.25rem] xl:top-[-6.25rem] z-[1]"></span>
                    <span
                      className="h-[8rem] w-[8rem] sm:h-[14rem] sm:w-[14rem] md:h-[10rem] md:w-[10rem] lg:h-[14rem] lg:w-[14rem] xl:h-[18.75rem] xl:w-[18.75rem] absolute bg-dark2 rounded-full left-[-2.5rem] bottom-[-2.5rem] md:right-[-3.5rem] md:bottom-[-3.5rem] lg:left-[-4rem] lg:bottom-[-4rem] xl:left-[-6.25rem] xl:bottom-[-6.25rem] z-[1]"></span>
                    <div className="featuredImg relative rounded-full ">
                      
                      <img
                        className="rounded-full relative z-[1] max-w-full"
                      //  src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76612106-8aba-4097-9619-baee44cc3b5f/deprm0d-1d3cf367-c685-42e2-ac5c-f4aba70c1b7f.png/v1/fill/w_894,h_894/commission__sasuke_uchiha__icon_avatar__ems__by_iennidesign_deprm0d-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzc2NjEyMTA2LThhYmEtNDA5Ny05NjE5LWJhZWU0NGNjM2I1ZlwvZGVwcm0wZC0xZDNjZjM2Ny1jNjg1LTQyZTItYWM1Yy1mNGFiYTcwYzFiN2YucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ko_mwnNeDjG06GmAdQNwXkwktTH6NuWb4cr05PZaGGU'
                      // 
                      src="https://fastone.websroad.com/static/media/featMockup.4c6f33493197d84c27fe.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="featuredCap relative w-full mt-10 md:mt-0">
                  <span className="bg-accent opacity-[.07] w-[6.25rem] h-[6.25rem] md:w-[12.5rem] md:h-[12.5rem] absolute rounded-full z-[-1] top-[-2.5rem] md:top-[-5rem]"></span>
                  <h3 className="font-normal text-[1.5rem] sm:text-[1.5rem] md:text-[1.875rem] lg:text-[2rem] xl:text-[2.5rem] font-Caveat  text-white uppercase leading-none">
                    Hello, I Am
                  </h3>
                  <h2 className="font-bold text-[2.3rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] font-Poppins text-white uppercase">
                    Hardik
                    <span className="font-normal text-[2.3rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] text-accent font-Poppins uppercase text-violet-600">
                      Bhammar
                    </span>
                  </h2>
                  <h5 className="md:justify-start justify-center font-bold text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] font-Poppins text-white uppercase flex items-center gap-2.5 tracking-[1px]">
                    <span className="w-[2.5rem] sm:w-[3rem] md:w-[4.375rem] bg-accent h-[1px]"></span>
                    FullStack Develper
                  </h5>
                  <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.25rem] xl:text-[1.375rem] text-desc md:leading-9 sm:leading-7 leading-6 w-full md:w-full lg:w-full xl:w-3/4 mt-6">
                    We're an award-winning, forward thinking, boutique digital
                    &amp; creative in Edmonton, Canada.
                  </p>
                  <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.25rem] xl:text-[1.375rem] text-desc md:leading-9 sm:leading-7 leading-6 w-full md:w-full lg:w-full xl:w-3/4 mt-4">
                    Our strategists, designers and coders work with clients from
                    all over the world to build successful,
                  </p>
                  <div className="flex items-center md:justify-start justify-center sm:gap-8 md:gap-10 lg:gap-15 xl:gap-20 gap-8 md:mt-[3.125rem] mt-[1.875rem]">
                    <a
                      className="text-accent uppercase md:text-[1.125rem] text-[1rem] flex gap-5 items-center hover:text-white"
                      title="Hire Me"
                      href="/">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="bg-accent text-white rounded-[5px] md:rounded-[10px] w-9 h-[3.5rem] md:w-11 md:h-[4.375rem] p-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                      <span className="font-bold font-Poppins underline underline-offset-8">
                        Hire Me
                      </span>
                    </a>
                    <a
                      className="bg-white text-accent text-[1rem] font-Poppins font-bold uppercase rounded-[5px] md:rounded-[10px] md:px-6 lg:px-10 xl:px-11 px-7 md:py-[1.125rem] py-[14px] hover:bg-accent hover:text-white text-center inline-block"
                      title="Download CV"
                      href="/">
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MenuBar/>
      </section>
       */}
       

    
      

    </main>
  );
}
