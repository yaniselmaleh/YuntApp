class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <section className="error404">
        <p>
          {
            this.props.statusCode
            ? `Erreur ${this.props.statusCode}`
            : 'An error occurred on client'
          }
        </p>
      </section>
    )
  }
}

export default Error