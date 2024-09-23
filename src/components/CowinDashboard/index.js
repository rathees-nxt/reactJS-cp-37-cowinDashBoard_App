// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiStatusType = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {cowinData: {}, apiStatus: apiStatusType.initial}

  componentDidMount() {
    this.getCowinDetails()
  }

  getCowinDetails = async () => {
    this.setState({apiStatus: apiStatusType.progress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }

      this.setState({cowinData: updatedData, apiStatus: apiStatusType.success})
    } else {
      this.setState({apiStatus: apiStatusType.failure})
    }
  }

  renderLoaderView = () => (
    <div className="loader-container">
      <div data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
      </div>
    </div>
  )

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="fail-img"
      />
      <h1 className="fail-heading">Something went wrong</h1>
    </div>
  )

  renderCowinCharts = () => {
    const {cowinData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = cowinData
    return (
      <>
        <VaccinationCoverage cowinDetails={last7DaysVaccination} />
        <VaccinationByGender cowinGender={vaccinationByGender} />
        <VaccinationByAge cowinAge={vaccinationByAge} />
      </>
    )
  }

  renderCowinDashboard = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusType.success:
        return this.renderCowinCharts()
      case apiStatusType.failure:
        return this.renderFailureView()
      case apiStatusType.progress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="covin-main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <p className="logo-text">Co-WIN</p>
        </div>
        <h1 className="cowin-heading">CoWIN Vaccination in India</h1>
        <div className="charts-container">{this.renderCowinDashboard()}</div>
      </div>
    )
  }
}

export default CowinDashboard
