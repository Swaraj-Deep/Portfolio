const express = require('express');
const router = express.Router();

router.get('/publications', (req, res, next) => {
  res.status(200).json({
    paperName: 'Exploring Biological Robustness for Reliable Multi-UAV Networks',
    publishedOn: '04 May 2021',
    publisher: 'IEEE',
    publishedIn: 'IEEE Transactions on Network and Service Management',
    description: `Unmanned Aerial Vehicles (UAVs), as aerial base stations, is a promising solution for providing end-to-end wireless communications to ground users, thanks to its positioning, flexibility, and autonomy. However, to provide end-to-end wireless communication services, all UAVs must ensure a reliable multi-UAV network topology, even when one or more UAVs are knocked off the network due to hardware/software faults, unreliable wireless connections, etc. Hence, how to design a reliable Multi-UAV network with a minimum number of UAVs becomes a key design issue, which is largely unaddressed in the literature. In this paper, we propose exploring biological robustness to design a reliable MuLtI-UAV NetworK, termed, bio-LINK, which is resilient against the UAV node failures and thus, ensures reliable end-to-end communication services to ground users. We first formulate the above problem as an integer linear programming (ILP) optimization problem and show it is NP-Hard. Next, we propose a polynomial-time heuristic that employs an iterative UAV positioning inspired by Markov Chain Monte Carlo (MCMC) random sampling approach. Our extensive simulation study shows that the proposed algorithm outperforms three baseline algorithms in terms of several considered robustness metrics (e.g., motif count, network efficiency, etc.) and ground user coverage, notwithstanding the random and targeted failure of UAV nodes. When compared with a baseline algorithm with the same number of UAVs, the proposed algorithm retains the motif count by 5-6 folds and improves network efficiency by 39-95% and ground user coverage by 2-18%.`,
    linkToPaper: 'https://ieeexplore.ieee.org/abstract/document/9422729'

  });
});

router.post('/publications', (req, res, next) => {
  const {paperName, publishedOn, publisher, publishedIn, description, linkToPaper} = req.body;
  res.status(200).json({
    message: 'Added publication'
  });
});

router.patch('/publications', (req, res, next) => {

});

router.delete('/publications', (req, res, next) => {

});

module.exports = router;
