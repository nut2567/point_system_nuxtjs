<template>
  <div>
    <section class="p-6 bg-slate-100 mt-10">
      <div class="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
        <div class="border rounded bg-white">
          <div class="p-6">
            <div class="flex items-center justify-between">
              <div class="widget-label">
                <h3>Clients</h3>
                <h1 class="text-3xl">512</h1>
              </div>
              <span class="text-green-500">
                <i class="material-icons items-center flex mr-2 text-5xl"
                  >home</i
                ></span
              >
            </div>
          </div>
        </div>
        <div class="border rounded bg-white">
          <div class="p-6">
            <div class="flex items-center justify-between">
              <div class="widget-label">
                <h3>Sales</h3>
                <h1 class="text-3xl">$7,770</h1>
              </div>
              <span class="icon widget-icon text-blue-500">
                <i class="material-icons items-center flex mr-2 text-5xl"
                  >home</i
                >
              </span>
            </div>
          </div>
        </div>

        <div class="border rounded bg-white">
          <div class="p-6">
            <div class="flex items-center justify-between">
              <div class="widget-label">
                <h3>Performance</h3>
                <h1 class="text-3xl">256%</h1>
              </div>
              <span class="icon widget-icon text-red-500">
                <i class="material-icons items-center flex mr-2 text-5xl"
                  >home</i
                ></span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="card mb-6">
          <div class="border rounded p-3">
            <p class="">
              <span class="icon"><i class="mdi mdi-finance"></i></span>
              Performance
            </p>
          </div>
          <div class="p-6">
          <Bar :data="chartData" 
          :options="chartOptions" 
          /></div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div
          class="flex flex-col gap-3 border-b border-slate-200 p-4 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p class="text-sm font-medium text-slate-500">Responsive table</p>
            <h2 class="text-lg font-semibold text-slate-900">Clients</h2>
          </div>
          <div class="text-sm text-slate-500">
            Scroll horizontally to view more columns.
          </div>
        </div>

        <div class="dashboard-table-scroll">
          <table class="dashboard-table">
            <thead>
              <tr>
                <th class="sticky-col avatar-col"></th>
                <th>Name</th>
                <th>Company</th>
                <th>City</th>
                <th>Progress</th>
                <th>Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="image-cell sticky-col avatar-col">
                  <div class="image">
                    <img
                      src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg"
                      class="rounded-full"
                    />
                  </div>
                </td>
                <td data-label="Name">Rebecca Bauch</td>
                <td data-label="Company">Daugherty-Daniel</td>
                <td data-label="City">South Cory</td>
                <td data-label="Progress" class="progress-cell">
                  <progress max="100" value="79">79</progress>
                </td>
                <td data-label="Created">
                  <small class="text-gray-500" title="Oct 25, 2021"
                    >Oct 25, 2021</small
                  >
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                    <button
                      class="button small blue --jb-modal"
                      data-target="sample-modal-2"
                      type="button"
                    >
                      <span class="icon"><i class="mdi mdi-eye"></i></span>
                    </button>
                    <button
                      class="button small red --jb-modal"
                      data-target="sample-modal"
                      type="button"
                    >
                      <span class="icon"
                        ><i class="mdi mdi-trash-can"></i
                      ></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="image-cell sticky-col avatar-col">
                  <div class="image">
                    <img
                      src="https://avatars.dicebear.com/v2/initials/felicita-yundt.svg"
                      class="rounded-full"
                    />
                  </div>
                </td>
                <td data-label="Name">Felicita Yundt</td>
                <td data-label="Company">Johns-Weissnat</td>
                <td data-label="City">East Ariel</td>
                <td data-label="Progress" class="progress-cell">
                  <progress max="100" value="67">67</progress>
                </td>
                <td data-label="Created">
                  <small class="text-gray-500" title="Jan 8, 2021"
                    >Jan 8, 2021</small
                  >
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                    <button
                      class="button small blue --jb-modal"
                      data-target="sample-modal-2"
                      type="button"
                    >
                      <span class="icon"><i class="mdi mdi-eye"></i></span>
                    </button>
                    <button
                      class="button small red --jb-modal"
                      data-target="sample-modal"
                      type="button"
                    >
                      <span class="icon"
                        ><i class="mdi mdi-trash-can"></i
                      ></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="image-cell sticky-col avatar-col">
                  <div class="image">
                    <img
                      src="https://avatars.dicebear.com/v2/initials/mr-larry-satterfield-v.svg"
                      class="rounded-full"
                    />
                  </div>
                </td>
                <td data-label="Name">Mr. Larry Satterfield V</td>
                <td data-label="Company">Hyatt Ltd</td>
                <td data-label="City">Windlerburgh</td>
                <td data-label="Progress" class="progress-cell">
                  <progress max="100" value="16">16</progress>
                </td>
                <td data-label="Created">
                  <small class="text-gray-500" title="Dec 18, 2021"
                    >Dec 18, 2021</small
                  >
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                    <button
                      class="button small blue --jb-modal"
                      data-target="sample-modal-2"
                      type="button"
                    >
                      <span class="icon"><i class="mdi mdi-eye"></i></span>
                    </button>
                    <button
                      class="button small red --jb-modal"
                      data-target="sample-modal"
                      type="button"
                    >
                      <span class="icon"
                        ><i class="mdi mdi-trash-can"></i
                      ></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="image-cell sticky-col avatar-col">
                  <div class="image">
                    <img
                      src="https://avatars.dicebear.com/v2/initials/mr-broderick-kub.svg"
                      class="rounded-full"
                    />
                  </div>
                </td>
                <td data-label="Name">Mr. Broderick Kub</td>
                <td data-label="Company">Kshlerin, Bauch and Ernser</td>
                <td data-label="City">New Kirstenport</td>
                <td data-label="Progress" class="progress-cell">
                  <progress max="100" value="71">71</progress>
                </td>
                <td data-label="Created">
                  <small class="text-gray-500" title="Sep 13, 2021"
                    >Sep 13, 2021</small
                  >
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                    <button
                      class="button small blue --jb-modal"
                      data-target="sample-modal-2"
                      type="button"
                    >
                      <span class="icon"><i class="mdi mdi-eye"></i></span>
                    </button>
                    <button
                      class="button small red --jb-modal"
                      data-target="sample-modal"
                      type="button"
                    >
                      <span class="icon"
                        ><i class="mdi mdi-trash-can"></i
                      ></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="image-cell sticky-col avatar-col">
                  <div class="image">
                    <img
                      src="https://avatars.dicebear.com/v2/initials/barry-weber.svg"
                      class="rounded-full"
                    />
                  </div>
                </td>
                <td data-label="Name">Barry Weber</td>
                <td data-label="Company">Schulist, Mosciski and Heidenreich</td>
                <td data-label="City">East Violettestad</td>
                <td data-label="Progress" class="progress-cell">
                  <progress max="100" value="80">80</progress>
                </td>
                <td data-label="Created">
                  <small class="text-gray-500" title="Jul 24, 2021"
                    >Jul 24, 2021</small
                  >
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                    <button
                      class="button small blue --jb-modal"
                      data-target="sample-modal-2"
                      type="button"
                    >
                      <span class="icon"><i class="mdi mdi-eye"></i></span>
                    </button>
                    <button
                      class="button small red --jb-modal"
                      data-target="sample-modal"
                      type="button"
                    >
                      <span class="icon"
                        ><i class="mdi mdi-trash-can"></i
                      ></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="image-cell sticky-col avatar-col">
                  <div class="image">
                    <img
                      src="https://avatars.dicebear.com/v2/initials/bert-kautzer-md.svg"
                      class="rounded-full"
                    />
                  </div>
                </td>
                <td data-label="Name">Bert Kautzer MD</td>
                <td data-label="Company">Gerhold and Sons</td>
                <td data-label="City">Mayeport</td>
                <td data-label="Progress" class="progress-cell">
                  <progress max="100" value="62">62</progress>
                </td>
                <td data-label="Created">
                  <small class="text-gray-500" title="Mar 30, 2021"
                    >Mar 30, 2021</small
                  >
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                    <button
                      class="button small blue --jb-modal"
                      data-target="sample-modal-2"
                      type="button"
                    >
                      <span class="icon"><i class="mdi mdi-eye"></i></span>
                    </button>
                    <button
                      class="button small red --jb-modal"
                      data-target="sample-modal"
                      type="button"
                    >
                      <span class="icon"
                        ><i class="mdi mdi-trash-can"></i
                      ></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="image-cell sticky-col avatar-col">
                  <div class="image">
                    <img
                      src="https://avatars.dicebear.com/v2/initials/lonzo-steuber.svg"
                      class="rounded-full"
                    />
                  </div>
                </td>
                <td data-label="Name">Lonzo Steuber</td>
                <td data-label="Company">Skiles Ltd</td>
                <td data-label="City">Marilouville</td>
                <td data-label="Progress" class="progress-cell">
                  <progress max="100" value="17">17</progress>
                </td>
                <td data-label="Created">
                  <small class="text-gray-500" title="Feb 12, 2021"
                    >Feb 12, 2021</small
                  >
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                    <button
                      class="button small blue --jb-modal"
                      data-target="sample-modal-2"
                      type="button"
                    >
                      <span class="icon"><i class="mdi mdi-eye"></i></span>
                    </button>
                    <button
                      class="button small red --jb-modal"
                      data-target="sample-modal"
                      type="button"
                    >
                      <span class="icon"
                        ><i class="mdi mdi-trash-can"></i
                      ></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="image-cell sticky-col avatar-col">
                  <div class="image">
                    <img
                      src="https://avatars.dicebear.com/v2/initials/jonathon-hahn.svg"
                      class="rounded-full"
                    />
                  </div>
                </td>
                <td data-label="Name">Jonathon Hahn</td>
                <td data-label="Company">Flatley Ltd</td>
                <td data-label="City">Billiemouth</td>
                <td data-label="Progress" class="progress-cell">
                  <progress max="100" value="74">74</progress>
                </td>
                <td data-label="Created">
                  <small class="text-gray-500" title="Dec 30, 2021"
                    >Dec 30, 2021</small
                  >
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                    <button
                      class="button small blue --jb-modal"
                      data-target="sample-modal-2"
                      type="button"
                    >
                      <span class="icon"><i class="mdi mdi-eye"></i></span>
                    </button>
                    <button
                      class="button small red --jb-modal"
                      data-target="sample-modal"
                      type="button"
                    >
                      <span class="icon"
                        ><i class="mdi mdi-trash-can"></i
                      ></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="image-cell sticky-col avatar-col">
                  <div class="image">
                    <img
                      src="https://avatars.dicebear.com/v2/initials/ryley-wuckert.svg"
                      class="rounded-full"
                    />
                  </div>
                </td>
                <td data-label="Name">Ryley Wuckert</td>
                <td data-label="Company">Heller-Little</td>
                <td data-label="City">Emeraldtown</td>
                <td data-label="Progress" class="progress-cell">
                  <progress max="100" value="54">54</progress>
                </td>
                <td data-label="Created">
                  <small class="text-gray-500" title="Jun 28, 2021"
                    >Jun 28, 2021</small
                  >
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                    <button
                      class="button small blue --jb-modal"
                      data-target="sample-modal-2"
                      type="button"
                    >
                      <span class="icon"><i class="mdi mdi-eye"></i></span>
                    </button>
                    <button
                      class="button small red --jb-modal"
                      data-target="sample-modal"
                      type="button"
                    >
                      <span class="icon"
                        ><i class="mdi mdi-trash-can"></i
                      ></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="image-cell sticky-col avatar-col">
                  <div class="image">
                    <img
                      src="https://avatars.dicebear.com/v2/initials/sienna-hayes.svg"
                      class="rounded-full"
                    />
                  </div>
                </td>
                <td data-label="Name">Sienna Hayes</td>
                <td data-label="Company">Conn, Jerde and Douglas</td>
                <td data-label="City">Jonathanfort</td>
                <td data-label="Progress" class="progress-cell">
                  <progress max="100" value="55">55</progress>
                </td>
                <td data-label="Created">
                  <small class="text-gray-500" title="Mar 7, 2021"
                    >Mar 7, 2021</small
                  >
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                    <button
                      class="button small blue --jb-modal"
                      data-target="sample-modal-2"
                      type="button"
                    >
                      <span class="icon"><i class="mdi mdi-eye"></i></span>
                    </button>
                    <button
                      class="button small red --jb-modal"
                      data-target="sample-modal"
                      type="button"
                    >
                      <span class="icon"
                        ><i class="mdi mdi-trash-can"></i
                      ></span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-4">
          <div class="table-pagination">
            <div class="flex items-center justify-between">
              <div class="buttons">
                <button type="button" class="button active">1</button>
                <button type="button" class="button">2</button>
                <button type="button" class="button">3</button>
              </div>
              <small>Page 1 of 3</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "token",
});

import { Bar } from 'vue-chartjs';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 50, 10],
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
});
</script>

<style scoped>
.dashboard-table-scroll {
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-gutter: stable;
}

.dashboard-table {
  min-width: 920px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
  text-align: left;
}

.dashboard-table th,
.dashboard-table td {
  height: 64px;
  border-bottom: 1px solid rgb(226 232 240);
  padding: 0.875rem 1rem;
  color: rgb(51 65 85);
  white-space: nowrap;
}

.dashboard-table thead th {
  position: sticky;
  top: 0;
  z-index: 2;
  height: 48px;
  background: rgb(248 250 252);
  color: rgb(71 85 105);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}

.dashboard-table tbody tr {
  background: white;
}

.dashboard-table tbody tr:hover td {
  background: rgb(248 250 252);
}

.dashboard-table .sticky-col {
  position: sticky;
  left: 0;
  z-index: 3;
  background: inherit;
  box-shadow: 1px 0 0 rgb(226 232 240), 10px 0 16px -16px rgb(15 23 42);
}

.dashboard-table thead .sticky-col {
  z-index: 4;
  background: rgb(248 250 252);
}

.dashboard-table .avatar-col {
  width: 76px;
  min-width: 76px;
  max-width: 76px;
  padding-left: 1rem;
  padding-right: 0.75rem;
}

.dashboard-table .image {
  width: 40px;
  height: 40px;
}

.dashboard-table .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dashboard-table progress {
  width: 120px;
  height: 0.625rem;
  accent-color: rgb(37 99 235);
}

.dashboard-table .actions-cell {
  width: 112px;
}

.dashboard-table .buttons {
  display: flex;
  gap: 0.5rem;
}

.dashboard-table .button {
  min-width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.375rem;
  background: rgb(241 245 249);
  color: rgb(51 65 85);
}

.dashboard-table .button.blue {
  background: rgb(219 234 254);
  color: rgb(29 78 216);
}

.dashboard-table .button.red {
  background: rgb(254 226 226);
  color: rgb(185 28 28);
}

.table-pagination .button {
  min-width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.375rem;
  background: rgb(241 245 249);
  color: rgb(51 65 85);
}

.table-pagination .button.active {
  background: rgb(37 99 235);
  color: white;
}
</style>
