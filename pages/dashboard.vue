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

      <div class="notification blue">
        <div
          class="flex border rounded p-3 flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 mb-5"
        >
          <div class="">
            <p class="">
              <span class="icon"><i class="mdi mdi-finance"></i></span>
              Responsive table
            </p>
          </div>
          <button
            type="button"
            class="button small textual --jb-notification-dismiss"
          >
            Dismiss
          </button>
        </div>
      </div>

      <div class="card has-table">
        <div class="border rounded p-3">
          <p class="">
            <span class="icon"><i class="mdi mdi-finance"></i></span>
            Clients
          </p>
        </div>

        <div class="border rounded p-3">
          <table class="w-full text-left">
            <thead>
              <tr>
                <th></th>
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
                <td class="image-cell">
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
                <td class="image-cell">
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
                <td class="image-cell">
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
                <td class="image-cell">
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
                <td class="image-cell">
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
                <td class="image-cell">
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
                <td class="image-cell">
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
                <td class="image-cell">
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
                <td class="image-cell">
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
                <td class="image-cell">
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

<script setup>
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
</style>